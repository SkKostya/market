import { ProductCard } from '../entities'

interface IProps {}

const ProductsPage = ({}: IProps) => {
  return (
    <main className="main">
      <ProductCard />
    </main>
  )
}

export default ProductsPage
