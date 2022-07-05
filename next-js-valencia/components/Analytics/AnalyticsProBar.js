import styles from "../../styles/Analytics.module.css"
import ProgressBarItem from "./ProgressBarItem";

function getDate() {

    let item = []
  
    let dateCurrent = new Date();
  
  
    for (let i = 0; i < 7; i++) {
  
               let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  
               let tempDate = new Date();
               tempDate.setDate(dateCurrent.getDate()-i);
               
               let str = tempDate.getDate() + ", " + days[tempDate.getDay()]; 
               
               item.push(str);
        
    }
  
    item.reverse()
  
    return item
  
  }


const ProgressBar = () => {
 

    return(

      <div className={styles.progressBar}>
        <span className={`${styles.percent} ${styles.percentPos}`}>0</span>
        <span className={styles.percent}>25</span>
        <span className={styles.percent}>50</span>
        <span className={styles.percent}>75</span>
        <span className={styles.percent}>100</span> 

          {getDate().map((item,index) =>(
              <ProgressBarItem key={index} dateItem={item} />   
          ))} 

        <span className={`${styles.percent} ${styles.percentPos}`}>0</span>
        <span className={styles.percent}>25</span>
        <span className={styles.percent}>50</span>
        <span className={styles.percent}>75</span>
        <span className={styles.percent}>100</span>
      </div >
      
    )
  
  }

  export default ProgressBar;