import { Headline } from '@components/ui/headline'
import { ScrollableAnimate } from '@components/scrollable-animate'

export default function Home() {
  return (
    <main>
      <div className="flex h-screen flex-col justify-center bg-teal-200 text-center dark:bg-teal-950">
        <Headline className="text-teal-950 dark:text-teal-200">
          Start scrolling to see the magic
        </Headline>
      </div>
      <ScrollableAnimate />
      <div className="h-screen bg-teal-200 dark:bg-teal-950" />
    </main>
  )
}
