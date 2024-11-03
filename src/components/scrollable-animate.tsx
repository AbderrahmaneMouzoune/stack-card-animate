import { Headline } from '@components/ui/headline'

function ScrollableAnimate() {
  const cards = [
    {
      id: 'card1',
      title: 'Card 1',
      bgColor: 'bg-cyan-300 dark:bg-cyan-950 text-cyan-900 dark:text-cyan-100',
    },
    {
      id: 'card2',
      title: 'Card 2',
      bgColor: 'bg-sky-300 dark:bg-sky-950 text-sky-900 dark:text-sky-100',
    },
    {
      id: 'card3',
      title: 'Card 3',
      bgColor: 'bg-blue-300 dark:bg-blue-950 text-blue-900 dark:text-blue-100',
    },
    {
      id: 'card4',
      title: 'Card 4',
      bgColor:
        'bg-indigo-300 dark:bg-indigo-950 text-indigo-900 dark:text-indigo-100',
    },
  ]

  return (
    <div className="flex min-h-screen justify-center">
      <div className="mx-auto w-[90%]">
        <ul className="grid grid-cols-1 gap-5 py-[calc(4*1.5em)]">
          {cards.map((card, index) => (
            <li
              key={card.id}
              className="sticky top-0"
              style={{ paddingTop: `${(index + 1) * 1.5}em` }}
            >
              <div
                className={`${card.bgColor} mx-auto flex h-[87vh] max-w-5xl items-center justify-center rounded-3xl p-8 transition-all duration-500`}
              >
                <Headline>{card.title}</Headline>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { ScrollableAnimate }
