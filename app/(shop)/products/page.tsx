import './products.scss'

import { ProductCard } from '../entities'

interface IProps {}

const ProductsPage = ({}: IProps) => {
  return (
    <main className="products-page container">
      <aside className="products-page__sidebar">filters</aside>
      <div className="products-page__content">
        <div className="products-page__list products-grid">
          <ProductCard
            href={'/'}
            image={'/images/auth/auth-bg-dark.jpg'}
            title={'Product Title'}
            description={
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quasi'
            }
            likes={435}
            comments={34}
          />
        </div>
      </div>
    </main>
  )
}

export default ProductsPage
