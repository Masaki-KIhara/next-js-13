'use client'

import { useRouter } from 'next/navigation'

type Props = {
  destination?: string
}

export default function RouterButton({ destination = '' }: Props) {
  const router = useRouter()
  return (
    <button
      className="rounded bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-700"
      onClick={() => {
        router.push(`/${destination}`)
      }}
    >
      Nav to {destination ? destination : 'home'}
    </button>
  )
}
