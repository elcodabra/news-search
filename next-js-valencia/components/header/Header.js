
import styles from "../../styles/Header.module.css"
import NavBar from "./NavBar";
import Search from "./Search";
import{useRouter} from "next/router"
import { useState,useEffect } from "react";



const Header = () => {

  const [search, setSearch] = useState(true);

  const pathName = useRouter().asPath;

  useEffect(()=>{

    if (pathName === "/") {
      setSearch(true)
    }else{
      setSearch(false)
    }
  })

  const styleHeader = pathName == "/" ? styles.headerWrapper : styles.headerAnalytic;

  return(
    <div className={`${styleHeader}`}>
        <NavBar/>
        <hr className={styles.line} />
        {search && <Search/>}
        
    </div>
  )

}


export default Header;