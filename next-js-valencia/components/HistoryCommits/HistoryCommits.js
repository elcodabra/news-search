import HistoryHeader from "./HistoryHeader";
import HistoryContent from "./HistoryContent";
import styles from "../../styles/HistoryCommits.module.css"



const HistoryCommits = () => {

  return(
   <div className={styles.commitsWrapper}>
        <HistoryHeader/>
        <HistoryContent/>
   </div>
  )

}


export default HistoryCommits;