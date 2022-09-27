
import { NavLogin } from "./NavLogin"
import styles from '../../styles/Navbar.module.scss'

const Navbar = () => {
  return(
    <nav className={styles.container}>
      <NavLogin />
    </nav>
  )
  }

export { Navbar }