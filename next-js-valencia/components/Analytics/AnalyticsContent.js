import styles from "../../styles/Analytics.module.css"
import ProgressBar from './AnalyticsProBar';

const AnalyticsContent = () => {

    return(

      <div className={styles.background}>
            <div className={`container`}>
                <h1 className={styles.headline}>Аналитика по дням</h1>
            <div className={styles.nav}>
              <div className={`${styles.date} ${styles.textStyle}`}>
                 Дата 
                <p className={`${styles.dateItem} ${styles.textStyle}`}>(август)</p>
              </div>
              <div className={`${styles.navHeadline} ${styles.textStyle}`}>
                Кол-во упоминаний
              </div>
            </div>
             <ProgressBar/>
         </div>
      </div>
      
    )
  
  }

  export default AnalyticsContent;

