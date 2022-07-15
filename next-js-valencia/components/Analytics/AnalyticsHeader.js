import styles from "../../styles/Analytics.module.css"
import Link from "next/link";






const AnalyticsHeader = () => {


  

  
  return(
    <div className = {`${styles.header} container`} >
        <div className = {styles.breadCrumbs}>
                <Link href="/"><a className={styles.link} >Главная</a></Link>
                    <span className={styles.currentPage} > / Аналитика</span>
        </div>
        <div className = {styles.requestNews}>
              <p className = {styles.requestTopic}>
                  Вы спросили: 
                <span className = {styles.requestTopic}> «Путешествия»</span>
              </p>
              <div className = {styles.dataWrapper}>
                <p className = {styles.requestData}>
                    Новостей за неделю: 
                    <span className = {styles.requestDataItem}> 34 324</span>
                  </p>
                  <p className = {styles.requestData}>
                    Упоминаний в загаловках:
                    <span className = {styles.requestDataItem}> 235</span>
                  </p>
              </div>   
        </div>
    </div>
  )

}


export default AnalyticsHeader;