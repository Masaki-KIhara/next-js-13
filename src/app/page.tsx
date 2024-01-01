import NotesList from './components/notes-list'

export default function Home() {
  return (
    <div className="m-10 text-center">
      <p>Hello world</p>
      {/* @ts-expect-error */}
      <NotesList />
    </div>
  )
}
