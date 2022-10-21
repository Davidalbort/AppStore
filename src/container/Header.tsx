import { Logo } from '../components/Logo'
import { Navbar } from '../components/Navbar'
import LogoSale from '../../styles/assets/logos/logo_yard_sale.svg'
import menu from '../../styles/assets/icons/icon_menu.svg'
import styles from '../../styles/Header.module.scss'
import { ListCategories } from '../components/ListCategories'


const logo1 = {
	srcLogo: menu,
	hrefLogo: './',
	altLogo: 'Logo of app store'
  
}
const logo2 = {
	srcLogo: LogoSale,
	hrefLogo: './',
	altLogo: 'Logo of app store'
  
}
const Header = () => {
	return(
		<div className={styles.container}>
			<Logo infoLogo={logo1} className={styles.logo1}/>
			<div>
				<Logo infoLogo={logo2} className={styles.logo2}/>
				<ListCategories className={styles.categories}/>
			</div>
			<Navbar />
		</div>
	)
}

export { Header }