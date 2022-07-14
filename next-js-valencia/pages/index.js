import Author from "../components/author/Author";
import HistoryCommits from "../components/HistoryCommits/HistoryCommits";
import Loader from "../components/loader/Loader";
import Result from "../components/news-result/Result";
import NoFoundNews from './../components/NoFoundNews/NoFoundNews';


const Home = ({loader,noFound,result}) => {

       return(
        <div> 
                {loader && <Loader/>}
                {noFound && <NoFoundNews/>}
                {result && <Result/>} 
                <Author/>
                <HistoryCommits/>
        </div> 
        
       )
        

}
 


export default Home;