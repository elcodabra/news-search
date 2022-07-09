import styles from "../../styles/Header.module.css"
import { gettingNews } from "../../pages/api/api";
import { useState,useEffect } from "react";
import { getInputValue } from "../../pages/api/api";











const Search = () => {

    const [topic, setTitle] = useState('');

    getInputValue(topic);



    const searchNews = (e) => {

        e.preventDefault();
    
    
        if (topic.length === 0) {
    
            alert("«Нужно ввести ключевое слово»");
    
            return;
        }
        
    
        gettingNews().then(function (item) {
    
            console.log(item);
                
            // if (item.length  === 0) {
                
            //     hideLoader();
            //     showNoNewsFound();
    
            // }else{
            //     hideLoader();
            //     showSearchResult();
            // }
    
    
          }).catch((error) => {
            alert("«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»");
         })
    
    }


  return(
    <div className={`${styles.search} container`} >
        <h1 className={styles.title} >
            Что в мире творится?
        </h1>
        <p className={styles.text}>
            Введите в поиске любую тему и узнайте, насколько популярной она была в носотях за прошедшую неделю.
        </p>
        <form className={styles.form}>
             
            <div className={styles.wrapperInput}  >
                <input className={styles.input} onChange={event => setTitle(event.target.value)}   type="text" placeholder="Введите тему новости"></input>
                <input className={styles.btn} type="submit" onClick={searchNews} value="Искать"></input>
            </div>

        </form>
        
    </div>
  )

}


export default Search;