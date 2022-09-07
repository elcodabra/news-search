import ResultContent from "./ResultContent";
import ResultHeader from "./ResultHeader";
import styles from "../../styles/NewsResult.module.css"


const Result = () => {
    return (
        <div className={styles.background} >
            <ResultHeader />
            <ResultContent />
        </div>
    )
}
export default Result;