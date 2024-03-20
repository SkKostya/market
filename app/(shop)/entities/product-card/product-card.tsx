import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  href: string
  image: string
  title: string
  description: string
  likes: number
  comments: number
}

const ProductCard: React.FC<IProps> = ({
  href,
  image,
  title,
  description,
  likes,
  comments,
}) => {
  return (
    <Link href={href} className="product-card">
      <figure className="product-card__image">
        <Image
          fill={true}
          style={{ objectFit: 'cover' }}
          src={image}
          alt={title + ' image'}
        />
      </figure>
      <h3 className="product-card__title">{title}</h3>
      <p className="product-card__description">{description}</p>
      <ul className="product-card__reactions">
        <li className="product-card__reaction">{likes}</li>
        <li className="product-card__reaction">{comments}</li>
      </ul>
    </Link>
  )
}

export default ProductCard
