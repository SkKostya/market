import Image from 'next/image'
import Link from 'next/link'

import { ROUTES, SITE_MAP_MENU } from '@/globals/routes'

import { SettingsMenu } from './ui'

interface IProps {}

const Header = ({}: IProps) => {
  return (
    <header className="header">
      <div className="header__container">
        <Link href={ROUTES.products}>
          <Image
            src="/images/market-logo.png"
            width={160}
            height={40}
            alt="Market Logo"
          />
        </Link>

        <nav className="header__menu-wrapper" aria-label="Site Map">
          <ul className="header__menu" role="list">
            {SITE_MAP_MENU.map((link) => (
              <li key={link.href}>
                <Link className="link header__link" href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <SettingsMenu />
      </div>
    </header>
  )
}

export default Header
