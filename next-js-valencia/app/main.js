const changeDate = (arrayDate) => {
  const dateNews = arrayDate;
  const changeDate = new Date(dateNews).toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric' }).slice(0, -3);
  const strDateMonth = changeDate.split(' ');
  const currentDate = changeDate.replace(strDateMonth[1], `${strDateMonth[1]},`);
  return currentDate;
};

const currentMonth = () => {
  const date = new Date();
  date.getMonth();
  const currentDateMonth = new Date(date).toLocaleDateString('ru', { month: 'long' });
  return currentDateMonth;
};

const getDaysWeek = () => {
  const item = [];
  const dateCurrent = new Date();

  for (let i = 6; i >= 0; i--) {
    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    const tempDate = new Date();
    tempDate.setDate(dateCurrent.getDate() - i);
    const str = `${tempDate.getDate()}, ${days[tempDate.getDay()]}`;
    item.push(str);
  }
  return item;
};

const changeImageItem = (image, changeImg) => {
  if (image === null) {
    changeImg('https://personabrd.com.ua/img/master/6e97727a-f2dd-4b33-9590-0b6d3bbff22d.png');
  } else {
    const checkImgSrc = (src) => {
      const img = new Image();
      img.onerror = function () {
        if (img.onerror) {
          changeImg('https://personabrd.com.ua/img/master/6e97727a-f2dd-4b33-9590-0b6d3bbff22d.png');
        }
      };
      img.src = src;
    };
    checkImgSrc(image);
  }
  return image;
};

const changeAuthorItem = (author, changeAuthor) => {
  if (author === null || author === '') {
    changeAuthor('Автор не указан');
  }
  return author;
};

function dataAnalytics() {
  const count = [];
  function getAnalyticsData(arr, topic) {
    if (arr === null) {
      return;
    }
    const arrData = [];
    arr.forEach((el) => {
      arrData.push(el.title);
    });
    const arrDataText = arrData.join('');
    let countTitle = 0;
    let pos = arrDataText.toLowerCase().indexOf(`${topic}`.toLowerCase());
    while (pos != -1) {
      countTitle++;
      pos = arrDataText.toLowerCase().indexOf(`${topic}`.toLowerCase(), pos + 1);
    }
    count.push(countTitle);
  }
  return { getAnalyticsData, count };
}

export {
  changeDate,
  currentMonth,
  getDaysWeek,
  changeImageItem,
  changeAuthorItem,
  dataAnalytics,
};
