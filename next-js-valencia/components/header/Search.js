import styles from "../../styles/Header.module.css"
import { gettingNews } from "../../pages/api/api";
import { useState, useEffect } from "react";
import { getInputValue } from "../../pages/api/api";
import classNames from 'classnames';

const Search = ({
    loader,
    noNewsFound,
    searchResult,
}) => {
    const [topic, setTopic] = useState('');
    getInputValue(topic);
    const searchNews = (e) => {
        e.preventDefault();
        noNewsFound(false);
        if (topic.length === 0) {
            searchResult(false);
            alert("«Нужно ввести ключевое слово»");
            return;
        } else if (setTopic(topic) != topic) {
            searchResult(false);
        }
        loader(true)
        gettingNews().then(function (item) {
            if (item.length === 0) {
                loader(false);
                noNewsFound(true);
            } else {
                loader(false);
                searchResult(true);
            }
        }).catch((error) => {
            alert("«Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз»");
            loader(false);
        })
    }
    return (
        <div className={classNames(styles.search, "container")} >
            <h1 className={styles.title} >
                Что в мире творится?
            </h1>
            <p className={styles.text}>
                Введите в поиске любую тему и узнайте, насколько популярной она была в носотях за прошедшую неделю.
            </p>
            <form className={styles.form}>
                <div className={styles.wrapperInput}  >
                    <input className={styles.input} onChange={event => setTopic(event.target.value)} type="text" placeholder="Введите тему новости"></input>
                    <input className={styles.btn} type="submit" onClick={searchNews} value="Искать"></input>
                </div>
            </form>
        </div>
    )
}
export default Search;