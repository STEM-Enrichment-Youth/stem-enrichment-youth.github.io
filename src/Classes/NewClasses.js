import React from "react";
import "./NewClasses.css";
import AddLocationIcon from '@material-ui/icons/AddLocation';


export default function NewClasses() {
    const [slide, setSlide] = React.useState(1);
    const [slide2, setSlide2] = React.useState(1); 
    const [slide3, setSlide3] = React.useState(1); 

    const newHandle = (slideNum, direction) => {
        switch(slideNum) {
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

    return (
        <div class="new-classes">
            <h1>Classes</h1>
            <div class="diff-classes">
                <div class="new-class">
                    <ion-icon name="color-wand"></ion-icon>
                    <h2>Biology</h2>
                    <div class="p-with-btn">

                        <div class="p-des-box">
                            <p class="p-des p">
                                Mathematics Class focuses on preparing students for the USA Math Olympiad.
                                Mathematics Class focuses on preparing students for the USA Math Olympiad.
                            </p>
                            <div class="units-con">
                                <button className="btn" onClick={newHandle(1, -1)}>
                                    <ion-icon name="arrow-back-circle"></ion-icon>
                                </button>
                                <div class="units" style={slide == 1 ? {} : { display: "none" }}>
                                    <div class='unit'>
                                        <img src="https://biology.mit.edu/wp-content/uploads/2017/12/Cell-karyotype-exhibiting-trisomy_Credit_NIH.jpeg" />
                                        <p>Unit 1: Genetics</p>
                                    </div>
                                    <div class='unit'>
                                        <img src="https://images.unsplash.com/flagged/photo-1552863473-6e5ffe5e052f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" />
                                        <p>Unit 3: Evolution</p>
                                    </div>
                                    <div class='unit'>
                                        <img src="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                                        <p>Unit 4: Anatomy</p>
                                    </div>
                                </div>
                                <div class="units" style={slide == 2 ? {} : { display: "none" }}>
                                    <div class='unit unit4'>
                                        <img src="https://images.unsplash.com/flagged/photo-1552863473-6e5ffe5e052f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" />
                                        <p>Unit 1: Genetics</p>
                                    </div>
                                    <div class='unit unit5'>
                                        <img src="https://biology.mit.edu/wp-content/uploads/2017/12/Cell-karyotype-exhibiting-trisomy_Credit_NIH.jpeg" />
                                        <p>Unit 3: Evolution</p>
                                    </div>
                                    <div class='unit unit6'>
                                        <img src="https://images.unsplash.com/photo-1533046250133-82e44c907320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                                        <p>Unit 5: Botany</p>
                                    </div>
                                </div>



                                <button className="btn" onClick={newHandle(1, 1)}>
                                    <ion-icon name="arrow-forward-circle"></ion-icon>
                                </button>
                            </div>

                        </div>


                    </div>
                    <div class="sign-up-btn">
                        <a href="#" className="a-btn btn-full">Sign up now</a>
                    </div>
                </div>
                <div class="new-class">
                    <ion-icon name="color-wand"></ion-icon>
                    <h2>Biology</h2>
                    <div class="p-with-btn">

                        <div class="p-des-box">
                            <p class="p-des p">
                                Mathematics Class focuses on preparing students for the USA Math Olympiad.
                                Mathematics Class focuses on preparing students for the USA Math Olympiad.
                            </p>
                            <div class="units-con">
                                <button className="btn" onClick={newHandle(2, -1)}>
                                    <ion-icon name="arrow-back-circle"></ion-icon>
                                </button>
                                <div class="units" style={slide2 == 1 ? {} : { display: "none" }}>
                                    <div class='unit'>
                                        <img src="https://biology.mit.edu/wp-content/uploads/2017/12/Cell-karyotype-exhibiting-trisomy_Credit_NIH.jpeg" />
                                        <p>Unit 1: Genetics</p>
                                    </div>
                                    <div class='unit'>
                                        <img src="https://images.unsplash.com/flagged/photo-1552863473-6e5ffe5e052f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" />
                                        <p>Unit 3: Evolution</p>
                                    </div>
                                    <div class='unit'>
                                        <img src="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                                        <p>Unit 4: Anatomy</p>
                                    </div>
                                </div>
                                <div class="units" style={slide2 == 2 ? {} : { display: "none" }}>
                                    <div class='unit unit4'>
                                        <img src="https://images.unsplash.com/flagged/photo-1552863473-6e5ffe5e052f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" />
                                        <p>Unit 1: Genetics</p>
                                    </div>
                                    <div class='unit unit5'>
                                        <img src="https://biology.mit.edu/wp-content/uploads/2017/12/Cell-karyotype-exhibiting-trisomy_Credit_NIH.jpeg" />
                                        <p>Unit 3: Evolution</p>
                                    </div>
                                    <div class='unit unit6'>
                                        <img src="https://images.unsplash.com/photo-1533046250133-82e44c907320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                                        <p>Unit 5: Botany</p>
                                    </div>
                                </div>



                                <button className="btn" onClick={newHandle(2, 1)}>
                                    <ion-icon name="arrow-forward-circle"></ion-icon>
                                </button>
                            </div>

                        </div>


                    </div>
                    <div class="sign-up-btn">
                        <a href="#" className="a-btn btn-full">Sign up now</a>
                    </div>
                </div>
                <div class="new-class">
                    <ion-icon name="color-wand"></ion-icon>
                    <h2>Neuroscience</h2>
                    <div class="p-with-btn">

                        <div class="p-des-box">
                            <p class="p-des p">
                                Mathematics Class focuses on preparing students for the USA Math Olympiad.
                                Mathematics Class focuses on preparing students for the USA Math Olympiad.
                            </p>
                            <div class="units-con">
                                <button className="btn" onClick={newHandle(3, -1)}>
                                    <ion-icon name="arrow-back-circle"></ion-icon>
                                </button>
                                <div class="units" style={slide3 == 1 ? {} : { display: "none" }}>
                                    <div class='unit'>
                                        <img src="https://biology.mit.edu/wp-content/uploads/2017/12/Cell-karyotype-exhibiting-trisomy_Credit_NIH.jpeg" />
                                        <p>Unit 1: Genetics</p>
                                    </div>
                                    <div class='unit'>
                                        <img src="https://images.unsplash.com/flagged/photo-1552863473-6e5ffe5e052f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" />
                                        <p>Unit 3: Evolution</p>
                                    </div>
                                    <div class='unit'>
                                        <img src="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                                        <p>Unit 4: Anatomy</p>
                                    </div>
                                </div>
                                <div class="units" style={slide3 == 2 ? {} : { display: "none" }}>
                                    <div class='unit unit4'>
                                        <img src="https://images.unsplash.com/flagged/photo-1552863473-6e5ffe5e052f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" />
                                        <p>Unit 1: Genetics</p>
                                    </div>
                                    <div class='unit unit5'>
                                        <img src="https://biology.mit.edu/wp-content/uploads/2017/12/Cell-karyotype-exhibiting-trisomy_Credit_NIH.jpeg" />
                                        <p>Unit 3: Evolution</p>
                                    </div>
                                    <div class='unit unit6'>
                                        <img src="https://images.unsplash.com/photo-1533046250133-82e44c907320?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                                        <p>Unit 5: Botany</p>
                                    </div>
                                </div>



                                <button className="btn" onClick={newHandle(3, 1)}>
                                    <ion-icon name="arrow-forward-circle"></ion-icon>
                                </button>
                            </div>

                        </div>


                    </div>
                    <div class="sign-up-btn">
                        <a href="#" className="a-btn btn-full">Sign up now</a>
                    </div>
                </div>

            </div>
        </div>
    )
}