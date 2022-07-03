import styles from "../../styles/NewsResult.module.css"
import Link from "next/link";
import Image from "next/image"
import newsImg from "../../public/img/result-img.png"

const ResultContentItem = () => (
    
       
    <div className={styles.resultContentItem}> 
        <Link href="#">
             <a  className={styles.item}>

                 <Image className={styles.img} src = {newsImg}/>

                 <div className={styles.wrapperText}>
                    <span className={styles.date}>2 августа, 2019</span>

                    <h1 className={styles.headline}>Национальное достояние – парки</h1>

                    <p className={styles.text}>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
    
                    <span className={styles.source}>Лента.com</span>
                
                 </div>

             </a>
        </Link>
    </div>

)




export default ResultContentItem;