let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;
const container = document.querySelector(".block-history__slider-container");
const track = document.querySelector(".block-history__slider-track");
const btnPrev = document.querySelector(".block-history__btn-prev");
const btnNext = document.querySelector(".block-history__btn-next");
const items = document.querySelectorAll(".block-history__slider-item");
const itemsCount = items.length;
const itemsWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemsWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemsWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemsWidth) / itemsWidth ;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemsWidth;

    setPosition();
    checkBtns();

});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemsWidth ;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemsWidth;

    setPosition();
    checkBtns();

});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemsWidth;

};
checkBtns();