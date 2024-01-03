'use client'

import { useEffect, useState } from 'react'

export default function TimerCounter() {
  const [count, setCount] = useState<number>(0)
  useEffect(() => {
    const timer = setInterval(() => setCount((prev) => prev + 1), 500)
    return () => clearInterval(timer)
  }, [])
  return (
    <div>
      <p>{count}</p>
      <button
        className="font-sm my-3 rounded bg-indigo-600 py-1 px-3 text-white hover:bg-indigo-600"
        onClick={() => setCount(0)}
      >
        reset
      </button>
    </div>
  )
}
