import Spinner from '@/app/components/spinner'
import TodoList from '@/app/components/todo-list'
import TodoEdit from '@/app/components/todo-edit'
import React, { Suspense } from 'react'

export default function TodoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex">
      <aside className={'h-[calc(100vh-56px)] w-1/4 bg-gray-200'}>
        <TodoEdit />
        <Suspense fallback={<Spinner />}>
          {/* @ts-expect-error */}
          <TodoList />
        </Suspense>
      </aside>
      <main className="flex flex-1 justify-center">{children}</main>
    </section>
  )
}
