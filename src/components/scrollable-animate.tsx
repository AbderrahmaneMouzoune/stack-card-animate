import { Headline } from '@components/ui/headline'

function ScrollableAnimate() {
  const cards = [
    {
      id: 'card1',
      title: 'Card 1',
      bgColor:
        'bg-purple-300 dark:bg-purple-950 text-purple-900 dark:text-purple-100',
    },
    {
      id: 'card2',
      title: 'Card 2',
      bgColor: 'bg-fuchsia-300 dark:bg-fuchsia-950',
    },
    {
      id: 'card3',
      title: 'Card 3',
      bgColor: 'bg-pink-300 dark:bg-pink-950 text-pink-900 dark:text-pink-100',
    },
    {
      id: 'card4',
      title: 'Card 4',
      bgColor: 'bg-rose-300 dark:bg-rose-950 text-rose-900 dark:text-rose-100',
    },
  ]

  return (
    <div className="flex min-h-screen justify-center bg-slate-200">
      <div className="mx-auto w-[90%]">
        <ul className="grid grid-cols-1 gap-5 py-[calc(4*1.5em)]">
          {cards.map((card, index) => (
            <li
              key={card.id}
              className="sticky top-0"
              style={{ paddingTop: `${(index + 1) * 1.5}em` }}
            >
              <div
                className={`${card.bgColor} flex h-[87vh] items-center justify-center rounded-3xl p-8 transition-all duration-500`}
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
