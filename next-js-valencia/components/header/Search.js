import styles from "../../styles/Header.module.css"



const Search = () => {

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
                <input className={styles.input}  type="text" placeholder="Введите тему новости"></input>
                <input className={styles.btn} type="submit"  value="Искать"></input>
            </div>

        </form>
        
    </div>
  )

}


export default Search;