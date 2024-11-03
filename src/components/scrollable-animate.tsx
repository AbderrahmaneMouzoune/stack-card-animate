function ScrollableAnimate() {
  const cards = [
    { id: 'card1', title: 'Card 1', bgColor: 'bg-purple-300' },
    { id: 'card2', title: 'Card 2', bgColor: 'bg-fuchsia-300' },
    { id: 'card3', title: 'Card 3', bgColor: 'bg-pink-300' },
    { id: 'card4', title: 'Card 4', bgColor: 'bg-rose-300' },
  ]

  return (
    <div className="flex min-h-screen justify-center bg-slate-700">
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
                <h2 className="text-4xl text-white">{card.title}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { ScrollableAnimate }
