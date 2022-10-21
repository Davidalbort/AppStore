import { ProductList } from '../container/ProductList'
import { SearchProduct } from '../container/SearchProduct'

const Layout = () => {
	return(
		<main>
			<SearchProduct />
			<ProductList />
		</main>
	)
}

export { Layout }