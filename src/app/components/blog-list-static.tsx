import Link from 'next/link'
import { Database } from '../../../database.types'

type Blog = Database['public']['Tables']['blogs']['Row']

const fetchBlogData = async () => {
  const res = await fetch(`${process.env.url}/rest/v1/blogs?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    cache: 'force-cache',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data in server')
  }
  const blogs: Blog[] = await res.json()
  return blogs
}

export default async function BlogListStatic() {
  const data = await fetchBlogData()
  return (
    <div className="p-4">
      <p className="mb-4 pb-3 text-xl font-medium underline underline-offset-4">
        Blogs
      </p>
      <ul>
        {data.map((blogData) => (
          <li key={blogData.id} className="my-1 text-base">
            <Link prefetch={false} href={`/blogs/${blogData.id}`}>
              {blogData.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
