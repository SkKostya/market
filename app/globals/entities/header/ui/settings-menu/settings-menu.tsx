'use client'

import Link from 'next/link'
import { useState } from 'react'

import { ROUTES, USER_SETTINGS_MENU } from '@/app/globals/routes'
import { Icons } from '@/app/globals/shared/ui/server.index'
import { OutsideClickHandler } from '@/app/globals/shared/ui/client.index'

interface IProps {}

const SettingsMenu = ({}: IProps) => {
  const [opened, setOpened] = useState(false)

  return (
    <OutsideClickHandler onOutsideClick={() => setOpened(false)}>
      <div className="settings-menu">
        <button
          onClick={() => setOpened(!opened)}
          className="settings-menu__button"
          aria-label="User settings"
          data-opened={opened}
        >
          <span aria-hidden="true">
            <Icons.UserSettings />
          </span>
        </button>

        <div className="settings-menu__dropdown" aria-expanded={opened}>
          <div className="settings-menu__wrapper">
            <nav>
              <ul>
                {USER_SETTINGS_MENU.map((link) => (
                  <li key={link.href}>
                    <Link className="link settings-menu__link" href={link.href}>
                      {link.title}
                    </Link>
                  </li>
                ))}

                <li>
                  <Link
                    className="link settings-menu__link settings-menu__logout"
                    href={ROUTES.login}
                  >
                    Выйти
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="settings-menu__footer">
              <button>Theme</button>
            </div>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  )
}

export default SettingsMenu
