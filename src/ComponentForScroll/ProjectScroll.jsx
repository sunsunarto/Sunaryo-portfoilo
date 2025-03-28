import {useState}from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../ComponentsStyle/Project.css";
import Socio from "../assets/Projects/Screenshot 2025-03-27 101644.png";
import Tekscerita from "../assets/Projects/Screenshot 2025-03-27 105058.png"
import DessertShop from "../assets/Projects/Screenshot 2025-03-27 110325.png"
import PostManagementApp from "../assets/Projects/Screenshot 2025-03-27 112937.png"
import UserRegistrationForm from "../assets/Projects/Screenshot 2025-03-27 113854.png"
import MovieCollection from "../assets/Projects/Screenshot 2025-03-27 115030.png";
import CharityOrganization from "../assets/Projects/Screenshot 2025-03-27 115551.png"
import Paste from "../assets/Projects/Screenshot 2025-03-27 120319.png"
import AdviceGen from "../assets/Projects/Screenshot 2025-03-27 120348.png"


function Project() {
    const [showImage1, setShowImage1] = useState(false);
    const [showImage2, setShowImage2] = useState(false);
    const [showImage3, setShowImage3] = useState(false);
    const [showImage4, setShowImage4] = useState(false);
    const [showImage5, setShowImage5] = useState(false);
    const [showImage6, setShowImage6] = useState(false);
    const [showImage7, setShowImage7] = useState(false);
    const [showImage8, setShowImage8] = useState(false);
    const [showImage9, setShowImage9] = useState(false);

    return (
        <div className="projectCon">
            <div className="project">
                <h1>My Projects</h1>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        200: {
                          slidesPerView: 1,
                        },
                        480: {
                          slidesPerView: 1,
                          
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                      }}>
                    <SwiperSlide>
                        <div className="projectSlide slide1">
                            <h1>Socio</h1>
                            <button onClick={() => setShowImage1(!showImage1)}>
                                {showImage1 ? "Close" : "Show Image"}
                            </button>
                            {showImage1 && <img src={Socio} alt="Socio" />}
                            <p> this is a description</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectSlide slide2">
                            <h1>Cerita Anekdot</h1>
                            <button onClick={() => setShowImage2(!showImage2)}>
                                {showImage2 ? "Close" : "Show Image"}
                            </button>
                            {showImage2 && <img src={Tekscerita} alt="teks cerita Anekdot" />}
                            <p>Project 2 description</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectSlide slide3">
                            <h1>Dessert Shop</h1>
                            <button onClick={() => setShowImage3(!showImage3)}>
                                {showImage3 ? "Close" : "Show Image"}
                            </button>
                            {showImage3 && <img src={DessertShop} alt="Dessert Shop" />}
                            <p>Project 3 description</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectSlide slide4">
                            <h1>Post Management App</h1>
                            <button onClick={() => setShowImage4(!showImage4)}>
                                {showImage4 ? "Close" : "Show Image"}
                            </button>
                            {showImage4 && <img src={PostManagementApp} alt="Post Management App" />}
                            <p>Project 4 description</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectSlide slide5">
                            <h1>User Registration Form</h1>
                            <button onClick={() => setShowImage5(!showImage5)}>
                                {showImage5 ? "Close" : "Show Image"}
                            </button>
                            {showImage5 && <img src={UserRegistrationForm} alt="user Registration Form" />}
                            <p>Project 5 description</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectSlide slide6">
                            <h1>movie collection</h1>
                            <button onClick={() => setShowImage6(!showImage6)}>
                                {showImage6 ? "Close" : "Show Image"}
                            </button>
                            {showImage6 && <img src={MovieCollection} alt="movie collection" />}
                            <p>Project 6 description</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectSlide slide7">
                            <h1>charity organization (copy)</h1>
                            <button onClick={() => setShowImage7(!showImage7)}>
                                {showImage7 ? "Close" : "Show Image"}
                            </button>
                            {showImage7 && <img src={CharityOrganization} alt="charity organization" />}
                            <p>Project 7 description</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectSlide slide8">
                            <h1>Paset (copy)</h1>
                            <button onClick={() => setShowImage8(!showImage8)}>
                                {showImage8 ? "Close" : "Show Image"}
                            </button>
                            {showImage8 && <img src={Paste} alt="" />}
                            <p>Project 8 description</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectSlide slide8">
                            <h1> Advice Generator</h1>
                            <button onClick={() => setShowImage9(!showImage9)}>
                                {showImage9 ? "Close" : "Show Image"}
                            </button>
                            {showImage9 && <img src={AdviceGen} alt="" />}
                            <p>Project 9 description</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Project;