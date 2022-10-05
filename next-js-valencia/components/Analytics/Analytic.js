import { useState, useEffect } from 'react';
import AnalyticsContent from './AnalyticsContent';
import AnalyticsHeader from './AnalyticsHeader';
import { dataAnalytics } from '../../app/main';

const Analytic = () => {
  const [topicRequest, setTopicRequest] = useState([]);
  const [analyticsDay, setAnalyticsDay] = useState([]);
  const [totalResults, setTotalResults] = useState([]);

  useEffect(() => {
    const topicRequest = JSON.parse(localStorage.getItem('topic'));
    const analyticsDay = JSON.parse(localStorage.getItem('analyticsDayArr'));
    const totalResults = JSON.parse(localStorage.getItem('totalResults'));
    setTopicRequest(topicRequest);
    setAnalyticsDay(analyticsDay);
    setTotalResults(totalResults.totalResults);
  }, []);

  const { count, getAnalyticsData } = dataAnalytics();

  for (let i = 0; i < analyticsDay.length; i++) {
    getAnalyticsData(analyticsDay[i], topicRequest);
  }

  let x = 0;
  const countHeadlines = count.map((i) => x += i, x).reverse()[0];
  return (
    <div>
      <AnalyticsHeader topic={topicRequest} totalCount={countHeadlines} totalRes={totalResults} />
      <AnalyticsContent itemNum={count} />
    </div>
  );
};
export default Analytic;
