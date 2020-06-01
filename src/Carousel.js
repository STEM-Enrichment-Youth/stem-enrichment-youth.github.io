import React from "react"; 
import Carousel from 'react-bootstrap/Carousel'; 


export default function Home() {
    const [index, setIndex] = React.useState(0);
    const img1 = "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"; 
    const img2 = "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1052&q=80"
    const img3 = "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"; 

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} style={{height: "500px"}} interval="2000">
        <Carousel.Item style={{height : "500px", backgroundImage : "url(" + img1 + ")", backgroundSize : "cover", backgroundColor : "rgba(9, 5, 5, 0.64)"}} >
          
          <Carousel.Caption style={{backgroundColor : "rgba(9, 5, 5, 0.64)"}}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height : "500px", backgroundImage : "url(" + img2 + ")", backgroundSize : "cover", backgroundColor : "rgba(9, 5, 5, 0.64)"}}>
          
  
          <Carousel.Caption style={{backgroundColor : "rgba(9, 5, 5, 0.64)"}}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item> 
        <Carousel.Item style={{height : "500px", backgroundImage:'url(' + img3 + '), linear-gradient(red, yellow)', backgroundSize: "cover"}}>

          <Carousel.Caption style={{backgroundColor : "rgba(9, 5, 5, 0.64)"}}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }


 // <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        //     <div class="carousel-inner" style={{height: "600px", overflow:"hidden"}}>
        //         <div class="carousel-item active">
        //             <img class="d-block w-100" src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="First slide"/>
        //          </div>
        //         <div class="carousel-item">
        //             <img class="d-block w-100" src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1052&q=80" alt="Second slide"/>
        //         </div>
        //         <div class="carousel-item">
        //             <img class="d-block w-100" src="https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Third slide"/>
        //         </div>
        //     </div>      
        //     <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span class="sr-only">Previous</span>
        //     </a>
        //     <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span class="sr-only">Next</span>
        //     </a>
        // </div>