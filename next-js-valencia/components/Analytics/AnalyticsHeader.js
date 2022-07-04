import styles from "../../styles/Analytics.module.css"
import Link from "next/link";

const AnalyticsHeader = () => {

  
  return(
    <div className = {`${styles.header} container`} >
        <div className = {styles.breadCrumbs}>
                <Link href="/"><a className={styles.link} >Главная</a></Link>
                    <span className={styles.currentPage} > / Аналитика</span>
        </div>
        
    </div>
  )

}


export default AnalyticsHeader;