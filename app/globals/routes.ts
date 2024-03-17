export const ROUTES = {
  products: '/products',
  about: '/about',
  markets: '/markets',

  user: '/user',
  cart: '/user/cart',
  userMarkets: '/user/markets',

  login: '/auth/login',
  registration: '/auth/registration',
}

export const SITE_MAP_MENU = [
  { href: ROUTES.products, title: 'Товары' },
  { href: ROUTES.about, title: 'О Market' },
]

export const USER_SETTINGS_MENU = [
  { href: ROUTES.user, title: 'Ползователь' },
  { href: ROUTES.cart, title: 'Карзина' },
  { href: ROUTES.userMarkets, title: 'Мои магазины' },
]
