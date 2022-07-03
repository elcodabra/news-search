import styles from "../../styles/NewsResult.module.css"
import Link from "next/link";


const ResultHeader = () => (
    
       
    <div className={`${styles.header} container`}> 

        <div className={styles.left}>
            <h1 className={styles.title}>Результаты поиска</h1>
        </div>

        <div className={styles.right}>
            <Link href="/analytics"><a className={styles.link}>Посмотреть аналитику</a></Link>
        </div>

    </div>

)



export default ResultHeader;