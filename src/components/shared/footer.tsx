import { Button } from '@components/ui/button'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto bg-background py-5 text-sm">
      <section className="container flex flex-col items-center justify-between gap-5 md:flex-row">
        <div>
          <span>© {new Date().getFullYear()} Built by </span>
          <Button variant={'link'} className="px-0" asChild>
            <Link href={'https://abderrahmanemouzoune.com'} target="_blank">
              Abderrahmane Mouzoune.
            </Link>
          </Button>
          <span className="ml-1">Powered by </span>
          <Button variant={'link'} className="px-0" asChild>
            <Link href={'https://www.youzoune.com'} target="_blank">
              youzoune.com
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-5 md:gap-2">
          <Button variant={'ghost'} asChild size={'icon'}>
            <Link
              href={'https://github.com/AbderrahmaneMouzoune'}
              target="_blank"
            >
              <GitHubLogoIcon className="size-4" />
            </Link>
          </Button>

          <hr className="size-4 w-[1px] bg-accent-foreground opacity-10" />

          <Button variant={'ghost'} size={'icon'} asChild>
            <Link
              href={'https://www.linkedin.com/in/abderrahmane-mouzoune/'}
              target="_blank"
            >
              <LinkedInLogoIcon className="size-4" />
            </Link>
          </Button>

          <hr className="size-4 w-[1px] bg-accent-foreground opacity-10" />

          <Button variant={'ghost'} size={'icon'} asChild>
            <Link href={'https://twitter.com/abderrahmane_js'} target="_blank">
              <TwitterLogoIcon className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </footer>
  )
}
