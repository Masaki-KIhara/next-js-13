import RouterButton from '../components/router-button'

export default async function BlogPage() {
  return (
    <div className="m-10 text-center">
      <span className="text-lg">Click a title on the left to view detail</span>
      <div className="my-5 flex justify-center">
        <RouterButton />
      </div>
    </div>
  )
}
