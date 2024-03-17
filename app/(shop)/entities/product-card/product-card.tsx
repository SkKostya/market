interface IProps {}

const ProductCard = ({}: IProps) => {
  return (
    <div className="product-card">
      <figure className="product-card__image"></figure>
      <h3 className="product-card__title">Product Title</h3>
      <p className="product-card__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quasi
        pariatur aperiam, debitis quis necessitatibus nostrum cumque vitae
        dolores at voluptatibus numquam tenetur impedit expedita. Magnam at in
        perferendis fugiat?
      </p>
      <ul className="product-card__reactions">
        <li className="product-card__reaction">435</li>
        <li className="product-card__reaction">1.34 тыс.</li>
      </ul>
    </div>
  )
}

export default ProductCard
