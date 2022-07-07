import styles from "../../styles/HistoryCommits.module.css"
import Link from "next/link";
import Image from "next/image"
import userImg from "../../public/img/authorImg.jpg"


const HistoryCarouselItem = () => {

  return(
   <div className={styles.Wrapper}>
    <Link href={"#"} >
          <a className={styles.item}>
              <div className={styles.date}>14 августа, 2019</div>

              <div className={styles.userProfile}>
              
               <div className={styles.imgWrapper}>
                    <Image className={styles.img} layout="responsive" src = {userImg}/>
               </div>

                <div className={styles.nameEmail}>
                  <div className={styles.name}>Антон Долинин</div>
                  <div className={styles.email}>anton@yandex.ru</div>
                </div>
              </div>
              
                <div className={styles.text}>
                  Emmet (formerly Zen Coding) is a web-
                  developer’s toolkit that can greatly improve your HTML & CSS workflow.
                </div>
          </a>
   </Link>

   </div>
  )

}


export default HistoryCarouselItem;