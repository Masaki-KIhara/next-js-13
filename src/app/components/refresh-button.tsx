'use client'

import { useRouter } from 'next/navigation'

export default function RefreshButton() {
  const router = useRouter()

  return (
    <button
      className="rounded bg-indigo-600 px-3 y-1 font-medium text-white hover:bg-indigo-700"
      onClick={() => {
        router.refresh()
      }}
    >
      refresh current route
    </button>
  )
}
