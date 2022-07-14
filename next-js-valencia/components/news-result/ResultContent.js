import styles from "../../styles/NewsResult.module.css"
import ResultContentItem from "./ResultContentItem";
import { useState,useEffect } from "react";



const ResultContent = () => {

    const [dataNews, setDataNews] = useState([]);
    const [itemsResult, setItemsResult] = useState([])


    useEffect(() => {

        setItemsResult([
            <ResultContentItem/>,
            <ResultContentItem/>,
            <ResultContentItem/>  
        ])

    },[])

    const moreNews = () => {
        setItemsResult([ ...itemsResult, 
            <ResultContentItem/>,
            <ResultContentItem/>,
            <ResultContentItem/>      
        ])
        
    }

    useEffect(() => {

        let dataObjNews = JSON.parse(localStorage.getItem("newsItem"));

        setDataNews(dataObjNews)    

    },[])

    return(
        <div className={`${styles.content} container`}> 
           {itemsResult.map((item,index) => (

                   <ResultContentItem
                    key = {index}  

                    title = {dataNews.arrTitle[index]}

                    description = {dataNews.arrDescription[index]}

                    author = {dataNews.arrAuthor[index]}

                    publishedAt = {dataNews.arrPublishedDate[index]}

                    img = {dataNews.arrImg[index]}

                    url = {dataNews.arrUrl[index]}
                    />
                    

           ))}
           <div className={styles.showMore}>
                <button className={styles.btn}  onClick = {moreNews }>Показать еще</button>
           </div>
        </div>
    )
}
    
export default ResultContent;