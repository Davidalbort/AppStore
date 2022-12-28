import Image from 'next/image'
// import logoHome from '../../styles/assets/logos/logo_yard_sale.svg'
// import addCart from '../../styles/assets/icons/bt_add_to_cart.svg'
// import addedCart from '../../styles/assets/icons/bt_added_to_cart.svg'
// import email from '../../styles/assets/icons/email.svg'
// import close from '../../styles/assets/icons/icon_close.png'
// import menu from '../../styles/assets/icons/icon_menu.svg'
import cartNotification from '../styles/assets/icons/icon_shopping_cart.svg'
// import cart from '../../styles/assets/icons/icon_shopping_cart.svg'
import downMenu from '../styles/assets/icons/down_menu.svg'



const NavLogin = () => {
	return(
		<>
			{/* <span>Sign in</span> */}
     
			<p>
          rogerdavidalbaortega@gmail.com

				<Image src={downMenu} alt='Arrow icon down'>

				</Image>
			</p>
      
			<div>
				<Image src={cartNotification} alt="Icon of cart notification">

				</Image>
				<p>
          2
				</p>

			</div>
     
		</>
	)
}

export { NavLogin }