import { ProductList } from "../app/container/ProductList";
import { SearchProduct } from "../app/container/SearchProduct";

const Layout = () => {
  return(
    <main>
      <SearchProduct />
      <ProductList />
    </main>
  )
}

export { Layout };