import styles from "../../styles/Analytics.module.css"




const ProgressBarItem = ({dateItem}) => {

    return(

      <div className={styles.background}>
          <div className={styles.item}>

                <div className={styles.itemDate}>{dateItem}</div>
                <div className={styles.itemCounterWrapper}>
                    <progress className={styles.itemValue} value="50" max="100"></progress>
                    <div className={styles.itemCounter}>{50}</div>
                </div>
                
          </div>
      </div>
      
    )
  
  }

  export default ProgressBarItem;