import React from "react";
import "./NewClasses.css";
import AddLocationIcon from '@material-ui/icons/AddLocation';
import Form from "../Form";
import Carousel from "./PhotoCarousel"; 

const gcCode1 = "659323"
const gcCode2 = "3423232"
const gcCode3 = "333i39i"


export default function NewClasses() {


    return (<div class="new-team-con">
        <div class="new-team">
            <h1>Classes</h1>
            <div class="con">
                <div class="con-item">
                    <h2 class="h">Lanna Thai</h2>
                    <p class="p-team">
                        Lanna Thai is a very yummy restaurant that we love very much yum yum yum for lannaaaa
                    </p>
                    <Carousel />
                    <p  style={{margin: "0"}}> Sign up with the Classroom Code:</p>
                    <h2>2390129</h2>
                    <button class="btn btn-danger">
                        <a href="https://classroom.google.com/u/0/h" style={{textDecoration: "none",  
                        color: "white", 
                        letterSpacing: "3px", 
                        fontWeight: "200", 
                        fontSize: "20px"}}>
                        SIGN UP
                        </a>
                    </button>

                </div>
                <div class="con-item">
                    <h2 class="h">Lanna Thai</h2>
                    <p class="p-team">
                        Lanna Thai is a very yummy restaurant that we love very much yum yum yum for lannaaaa
                    </p>
                    <Carousel />
                    <p  style={{margin: "0"}}> Sign up with the Classroom Code:</p>
                    <h2>2390129</h2>
                    <button class="btn btn-danger">
                        <a href="https://classroom.google.com/u/0/h" style={{textDecoration: "none",  
                        color: "white", 
                        letterSpacing: "3px", 
                        fontWeight: "200", 
                        fontSize: "20px"}}>
                        SIGN UP
                        </a>
                    </button>


                </div>

            </div>
        </div>
    </div>
    )
}


/*
const [slide, setSlide] = React.useState(1);
    const [slide2, setSlide2] = React.useState(1);
    const [slide3, setSlide3] = React.useState(1);
    const [gcCode, setCode] = React.useState("680543");

    const [showForm, setShowForm] = React.useState(false);

    const handleShow = (num) => {
        return () => {
            switch (num) {
                case 1:
                    setCode(gcCode1); break;
                case 2:
                    setCode(gcCode2); break;
                case 3:
                    setCode(gcCode3); break;
                default:
                    break;
            }
            setShowForm(!showForm);
        }
    }


    const newHandle = (slideNum, direction) => {
        switch (slideNum) {
            case 1:
                return () => {
                    const nextSlideForward = slide < 2 ? slide + 1 : 1;
                    const nextSlideBackward = slide > 1 ? slide - 1 : 2;
                    const nextSlide = direction > 0 ? nextSlideForward : nextSlideBackward;
                    setSlide(nextSlide);
                }
                break;
            case 2:
                return () => {
                    const nextSlideForward = slide2 < 2 ? slide2 + 1 : 1;
                    const nextSlideBackward = slide2 > 1 ? slide2 - 1 : 2;
                    const nextSlide = direction > 0 ? nextSlideForward : nextSlideBackward;
                    setSlide2(nextSlide);
                }
                break;
            case 3:
                return () => {
                    const nextSlideForward = slide3 < 2 ? slide3 + 1 : 1;
                    const nextSlideBackward = slide3 > 1 ? slide3 - 1 : 2;
                    const nextSlide = direction > 0 ? nextSlideForward : nextSlideBackward;
                    setSlide3(nextSlide);
                }
                break;
        }
    }

    const handleBackward = (e) => {
        const nextSlide = slide > 1 ? slide - 1 : 2;
        setSlide(nextSlide);
    }
    
*/