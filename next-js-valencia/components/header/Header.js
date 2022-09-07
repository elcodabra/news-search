
import styles from "../../styles/Header.module.css"
import NavBar from "./NavBar";
import Search from "./Search";
import { useRouter } from "next/router"
import { useState, useEffect } from "react";

const Header = ({
  loader,
  noNewsFound,
  searchResult,
}) => {
  const [search, setSearch] = useState(true);
  const pathName = useRouter().asPath;
  useEffect(() => {
    if (pathName === "/") {
      setSearch(true)
    } else {
      setSearch(false)
    }
  }, [pathName])
  return (
    <div className={pathName == "/" ? styles.headerWrapper : styles.headerAnalytic}>
      <NavBar />
      <hr className={styles.line} />
      {search && (
        <Search
          loader={loader}
          noNewsFound={noNewsFound}
          searchResult={searchResult}
        />
      )}
    </div>
  )
}
export default Header;