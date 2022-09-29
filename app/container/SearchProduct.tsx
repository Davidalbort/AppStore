import { ListCategories } from "../components/ListCategories"
import { Search } from "../components/Search"
import downMenu from "../../styles/assets/icons/down_menu.svg"
import Image from "next/image"
import styles from '../../styles/SearchProduct.module.scss';

const SearchProduct = () => {
  return(
    <div className={styles.container}>
      <Search />
      <ListCategories className={styles.categories}/>
      <div className={styles.order}>
          Order:
          <span>
            Most recent
          </span>

          <Image src={downMenu} alt='Arrow icon down'>

          </Image>
        </div>
    </div>
  )
}

export { SearchProduct }