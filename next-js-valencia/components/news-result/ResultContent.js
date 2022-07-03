import styles from "../../styles/NewsResult.module.css"
import ResultContentItem from "./ResultContentItem";
import { useState,useEffect } from "react";





const ResultContent = () => {

    const [itemResult, setItemResult] = useState([]);

    useEffect(() => {

        setItemResult([
            <ResultContentItem/>,
            <ResultContentItem/>,
            <ResultContentItem/>         
        ])

    },[])

    const moreNews = () => {
        setItemResult([ ...itemResult, 
            <ResultContentItem/>,
            <ResultContentItem/>,
            <ResultContentItem/>      
        ])
        
    }



    return(
        <div className={`${styles.content} container`}> 
           {itemResult.map((item,index) => (
                <div key = {index}>{item}</div>
           ))}
           <div className={styles.showMore}>
                <button className={styles.btn}  onClick = {moreNews }>Показать еще</button>
           </div>
        </div>
    )
}
    
export default ResultContent;