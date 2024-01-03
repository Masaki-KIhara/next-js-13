import { Suspense } from 'react'
import NotesList from './components/notes-list'
import RefreshButton from './components/refresh-button'
import Spinner from './components/spinner'
import TimerCounter from './components/timer-counter'

export default function Home() {
  return (
    <div className="m-10 text-center">
      <p>Hello world</p>
      <Suspense fallback={<Spinner color="border-green-500" />}>
        {/* @ts-expect-error */}
        <NotesList />
      </Suspense>
      <TimerCounter />
      <RefreshButton />
    </div>
  )
}
