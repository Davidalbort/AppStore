
import Image from 'next/image'
import {ProductsFromApi} from '../types/service'
import addCart from '../styles/assets/icons/bt_add_to_cart.svg'

interface PropsProductItem {
  product: ProductsFromApi
  handleAdd: (addProduct: ProductsFromApi) => void
  handleView: (viewProduct: ProductsFromApi) => void
}

const ProductItem = ({product,handleAdd,handleView}:PropsProductItem) => {
	return(
		<>
			<Image onClick={() => handleView(product)} src={product.category.image} width={240} height={240}  alt={`is image of ${product.title}`} />
			<div>
				<div>
					<span>{`$ ${product.price},00`}</span>
					<p>{product.title}</p>
				</div>
				<Image src={addCart} alt="Is icon to addCart" onClick={() => handleAdd(product)}>

				</Image>
			</div>
		</>
	)
}

export { ProductItem }
