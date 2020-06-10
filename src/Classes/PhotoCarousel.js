import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const img1 = "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
const img2 = "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1052&q=80"
const img3 = "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";


const carouselStyle = {
  // height: "300px",
  height: "300px",
  backgroundImage: "url(" + img1 + ")",
  backgroundSize: "cover",
  backgroundColor: "rgba(9, 5, 5, 0.64)"
}

export default function Home() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ height: "300px", width: "60%" }}
      interval="2000">

      <Carousel.Item class="new-test-yay" style={carouselStyle} >

        <Carousel.Caption style={{ backgroundColor: "rgba(9, 5, 5, 0.64)" }}>
          <h3 class="carousel-h">First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "300px", backgroundImage: "url(" + img2 + ")", backgroundSize: "cover", backgroundColor: "rgba(9, 5, 5, 0.64)" }}>


        <Carousel.Caption style={{ backgroundColor: "rgba(9, 5, 5, 0.64)" }}>
          <h3 class="carousel-h">Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "300px", backgroundImage: 'url(' + img3 + '), linear-gradient(red, yellow)', backgroundSize: "cover" }}>

        <Carousel.Caption style={{ backgroundColor: "rgba(9, 5, 5, 0.64)" }}>
          <h3 class="carousel-h">Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

