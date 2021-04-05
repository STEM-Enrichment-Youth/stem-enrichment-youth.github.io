// Component stuff
import React, { useState } from "react";
import Slider from "react-slick";

// Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Images
import physics from "./Classes/ClassPics/2.png";
import anatomy from "./Classes/ClassPics/1.png";
import molbio from "./Classes/ClassPics/5.png";
import settheory from "./Classes/ClassPics/3.png";
import geometry from "./Classes/ClassPics/4.png";
import algebra from "./Classes/ClassPics/6.png";
import tutor from "./Tutoring.png";
import labs from "./Lab.png";

// CSS 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "./ClassCarousel.css";

const Images = [
  {
    id: 1,
    src: physics,
    alt: "Physics",
    link: "physics"
  },
  {
    id: 2,
    src: anatomy,
    alt: "Anatomy",
    link: "anatomy"
  },
  {
    id: 3,
    src: molbio,
    alt: "Molecular Biology",
    link: "molecularbio"
  },
  {
    id: 4,
    src: settheory,
    alt: "Set theory",
    link: "settheory"
  },
  {
    id: 5,
    src: geometry,
    alt: "Geometry",
    link: "geometry"
  },
  {
    id: 6,
    src: algebra,
    alt: "Algebra"
  },
  {
    id: 7,
    src: tutor,
    alt: "Tutor"
  },
  {
    id: 8,
    src: labs,
    alt: "Labs"
  }
]

// Arrow components for navigating through slider
const NextArrow = ({ onClick }) => {
  return (
    <div className='arrow nextArrow' onClick={onClick}>
      <ChevronRightIcon />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className='arrow prevArrow' onClick={onClick}>
      <ChevronLeftIcon />
    </div>
  );
};

// Slider parent component //

/* Image model for the array
  image {
    id: (int)       // To prevent React key error
    src: ....   // Use React import, otherwise this does not work for some reason
    alt: ....   // Because it's good design I guess
  }
*/

const ImageSlider = ({ images = Images, slidesToShow = 3 }) => {

  // Keep track and manipulate current image index
  const [imageIndex, setImageIndex] = useState(0);

  // Some settings for the Slider component
  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    autoplay: true, // Remove this to remove autoplay
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow onClick />, // Remove for default arrows
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820, // 820px breakpoint <==> Media query
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Map given images to jsx components
  const templateImages = images.map((image, idx) => {
    return (
      <div
        className={idx === imageIndex ? "activeSlide" : "slide"}
        key={image.id}
      >
        <div className="slideWrapper">
          <img src={image.src} alt={image.alt} />
        </div>
      </div>
    );
  });

  // Return actual slider component
  return <Slider {...settings}>{templateImages}</Slider>;
};

export default ImageSlider;