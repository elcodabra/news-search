
import AnalyticsContent from "./AnalyticsContent";
import AnalyticsHeader from "./AnalyticsHeader";
import { useState,useEffect } from "react";


const Analytic = () => {

  const [topicRequest, setTopicRequest] = useState([])
  const [analyticsDay, setAnalyticsDay] = useState([])


    useEffect(() => {

      let topicRequest = JSON.parse(localStorage.getItem("topic"));
      let analyticsDay = JSON.parse(localStorage.getItem('analyticsDayArr'));
  
      setTopicRequest(topicRequest)
      setAnalyticsDay(analyticsDay)

    },[])
  

    let itemCountArr = [];

    function getAnalyticsData(arr) {

        let arrData = [];

        arr.forEach(el =>{
          arrData.push(el.title);
        })

        let arrDataText = arrData.join("");

        let count = 0;
        let pos = arrDataText.toLowerCase().indexOf(`${topicRequest}`.toLowerCase());
        while ( pos != -1 ) {
        count++;
        pos = arrDataText.toLowerCase().indexOf(`${topicRequest}`.toLowerCase(),pos+1);
        }

        itemCountArr.push(count);

        return {count}

    }

      analyticsDay.map(item => {
        getAnalyticsData(item)
      })

      console.log(itemCountArr);

  
  return(
    <div>
        <AnalyticsHeader/>
        <AnalyticsContent itemNum = {itemCountArr}/>
    </div>
  )

}


export default Analytic;