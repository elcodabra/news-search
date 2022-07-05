import Author from "../components/author/Author";
import HistoryCommits from "../components/HistoryCommits/HistoryCommits";
import Loader from "../components/loader/Loader";
import Result from "../components/news-result/Result";
import NoFoundNews from './../components/NoFoundNews/NoFoundNews';


const Home = () => (
    
       
        <div> 

                <Loader/>
                <NoFoundNews/>
                <Result/>
                <Author/>
                <HistoryCommits/>
        </div>

)
 


export default Home;