

const changeDate = (arrayDate) => {
  let dateNews = arrayDate;
  let changeDate = new Date(dateNews).toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric' }).slice(0, -3);
  let strDateMonth = changeDate.split(" ");
  let currentDate = changeDate.replace(strDateMonth[1], strDateMonth[1] + ",");

  return currentDate
}

const currentMonth = () => {
  let date = new Date()
  date.getMonth()
  let currentDateMonth = new Date(date).toLocaleDateString('ru', { month: 'long', });

  return currentDateMonth
}

const getDaysWeek = () => {
  let item = []
  let dateCurrent = new Date();

  for (let i = 6; i >= 0; i--) {
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    let tempDate = new Date();
    tempDate.setDate(dateCurrent.getDate() - i);
    let str = tempDate.getDate() + ", " + days[tempDate.getDay()];
    item.push(str);
  }

  return item
}

const changeImageItem = (image, changeImg) => {
  if (image === null) {
    changeImg("https://personabrd.com.ua/img/master/6e97727a-f2dd-4b33-9590-0b6d3bbff22d.png")
  } else {
    const checkImgSrc = src => {
      const img = new Image();
      img.onerror = function () {
        if (img.onerror) {
          changeImg("https://personabrd.com.ua/img/master/6e97727a-f2dd-4b33-9590-0b6d3bbff22d.png")
        }
      }
      img.src = src;
    }
    checkImgSrc(image)
  }

  return image
}

const changeAuthorItem = (author,changeAuthor) => {
  if (author === null || author === "") {
    changeAuthor("Автор не указан")
  }
  
  return author
}

export {
  changeDate,
  currentMonth,
  getDaysWeek,
  changeImageItem,
  changeAuthorItem
}



