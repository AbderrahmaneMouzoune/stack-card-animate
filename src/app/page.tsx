import { ScrollableAnimate } from '@components/scrollable-animate'

export default function Home() {
  return (
    <main>
      <div className="h-screen bg-teal-200" />
      <ScrollableAnimate />
      <div className="h-screen bg-amber-200" />
    </main>
  )
}
