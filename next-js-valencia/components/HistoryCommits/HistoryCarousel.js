import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../../styles/HistoryCommits.module.css"
import HistoryCarouselItem from "./HistoryCarouselItem";




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        right: "15px",
        zIndex:"9999",
        position:"absolute",
        backgroundColor:"black",
        width:"40px",
        height:"40px",
        display:"block",
        borderRadius: "100%",
        background:"url('https://cdn1.iconfinder.com/data/icons/ionicons-sharp-vol-1/512/chevron-forward-circle-sharp-128.png')",
        backgroundPosition:"center",
        backgroundSize:"cover"

        }}
      onClick={onClick}
    />
  );
}


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        left: "15px",
        zIndex:"9999",
        position:"absolute",
        backgroundColor:"black",
        width:"40px",
        height:"40px",
        display:"block",
        borderRadius: "100%",
        background:"url('https://cdn1.iconfinder.com/data/icons/ionicons-sharp-vol-1/512/chevron-back-circle-sharp-128.png')",
        backgroundPosition:"center",
        backgroundSize:"cover"
        }}
      onClick={onClick}
    />
  );
}

let arr = [1,2,3,4,5,6,7,8,9,10]
export default class HistoryCarousel extends Component {
  render() {
   
      const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [{
          breakpoint: 1440,
          settings: {
             arrows: false,
             centerPadding: '20px',
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: false,
             dots: true,
          }
       },
       {
          breakpoint: 1024,
          settings: {
             arrows: false,
             slidesToShow: 2,
             slidesToScroll: 2,
             infinite: false,
             dots: false,
          }
       },
       {
          breakpoint: 768,
          settings: {
             arrows: false,
             centerPadding: '0px',
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: false,
             dots:false,
          } 
       }
  
    ]
      };
    
 
    return (
      <div >
        <Slider {...settings}  className={styles.historySlider}>
         {arr.map((item,index) =>(
            <HistoryCarouselItem key={index}/>
          ))}
        </Slider>
      </div>
    );
  }
}

