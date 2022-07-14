import styles from "../../styles/NewsResult.module.css"
import Link from "next/link";



const ResultContentItem = ({title,description,author,publishedAt,img,url}) => (
    
   

    <div className={styles.resultContentItem}> 
        <Link href={url} >
             <a  className={styles.item}>

                <div className={styles.wrapperImg}>
                   <img className={styles.img} src={img} alt="News images" />
                </div>

                 <div className={styles.wrapperText}>

                    <span className={styles.date}>{publishedAt}</span>

                    <h1 className={styles.headline}>{title}</h1>

                    <p className={styles.text}>{description}</p>
    
                    <span className={styles.source}>{author}</span>
                
                 </div>

             </a>
        </Link>
    </div>

)




export default ResultContentItem;