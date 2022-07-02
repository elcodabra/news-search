import{useRouter} from "next/router"
import Link from "next/link";
import styles from "../../styles/Header.module.css"


const navigation = [
    {id:1, title:"Главная", path: "/" },
    {id:2, title:"О проекте", path: "/about-project" }
]

const NavBar = () => {

const pathName = useRouter().asPath;

return(
    <div className = {`${styles.nav} container`}>

        <div className={styles.left}>
            <Link href="/"><a className={styles.logo} >NewsAnalyzer</a></Link>
        </div>

        <div className={styles.right}>
            <nav className={styles.links}>
                {navigation.map(({id,title,path}) => (
                     <Link href={path} key = {id}>
                        <a className = {`${styles.link}  ${pathName == path ? styles.active : null }`} >{title}</a>
                     </Link>
                )) }
            </nav>
        </div>

    </div>
)

}
    
    
    




export default NavBar;