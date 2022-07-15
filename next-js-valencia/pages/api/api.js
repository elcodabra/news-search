// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import {changeDate} from "../../app/main"


let apiKey = "53dda3d904814c45bfe91ca26f3c68ff";

  let topic = [];

    export const getInputValue = (newsTopic) => {
        topic.push(newsTopic);
    } 


  const gettingNews = async (e) => {

  let topicItem = topic.pop()

  const url = `https://nomoreparties.co/news/v2/everything?q=${topicItem}&from="2022-06-07"&to="2022-06-07"&sortBy=publishedAt&pageSize=100&apiKey=${apiKey}`;

  const response = await fetch(url);
    const data = await response.json();
    const articles = data.articles

    let newsItem = {
      arrTitle: [],
      arrDescription: [],
      arrImg: [],
      arrUrl: [],
      arrPublishedAt: [],
      arrAuthor: [],
      arrPublishedDate: [],
      arrChangesDate: []
   }

      articles.forEach(el=> {
         newsItem.arrTitle.push(el.title);
         newsItem.arrDescription.push(el.description);
         newsItem.arrImg.push(el.urlToImage);
         newsItem.arrUrl.push(el.url);
         newsItem.arrPublishedAt.push(el.publishedAt);
         newsItem.arrAuthor.push(el.author);
     }); 

       changeDate(newsItem.arrPublishedAt,newsItem.arrChangesDate);
     
     let dataObj = JSON.stringify(newsItem)
     localStorage.setItem('newsItem', dataObj)

     let newsRes = JSON.stringify(articles)
     localStorage.setItem('newsData', newsRes)

     let dataTopic = JSON.stringify(topicItem)
     localStorage.setItem('topic',dataTopic)

     let totalRes = JSON.stringify(data)
     localStorage.setItem('totalResults',totalRes)

     return articles
}



const gettingCommits = async (e) => { 

  let reposUrl = `https://api.github.com/repos/M-skyi/Test_Valencia_JS/commits?&&per_page=20`;

  const response = await fetch(reposUrl)
  
  const data = await response.json()

  let commitsItem = {
     arrDate: [],
     arrImgUrl: [],
     arrName: [],
     arrEmail: [],
     arrMessage: [],
     arrItemUrl: [],
     arrChangesDate: []
  }

  data.forEach( el => {

     commitsItem.arrDate.push(el.commit.author.date);
     commitsItem.arrImgUrl.push(el.author.avatar_url);
     commitsItem.arrName.push(el.commit.author.name);
     commitsItem.arrEmail.push(el.commit.author.email);
     commitsItem.arrMessage.push(el.commit.message);
     commitsItem.arrItemUrl.push(el.html_url);

  })

  changeDate(commitsItem.arrDate,commitsItem.arrChangesDate);

      let dataCommits = JSON.stringify(commitsItem);
      localStorage.setItem('commitsItem', dataCommits);   
       
   }   
   
 gettingCommits()

export{
  gettingCommits,
  gettingNews 
}