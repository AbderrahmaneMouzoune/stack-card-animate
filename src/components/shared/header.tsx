import { ThemeToggle } from '@components/theme-toggle'

export default function Header() {
  return (
    <header className="container sticky top-0 mx-auto flex justify-end bg-teal-200 py-2 dark:bg-teal-950">
      <ThemeToggle />
    </header>
  )
}
