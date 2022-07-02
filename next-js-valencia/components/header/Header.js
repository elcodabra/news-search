
import styles from "../../styles/Header.module.css"
import NavBar from "./NavBar";
import Search from "./Search";


const Header = () => {

  return(
    <div className={styles.header}>
        <NavBar/>
        <hr className={styles.line} />
        <Search/>
    </div>
  )

}


export default Header;