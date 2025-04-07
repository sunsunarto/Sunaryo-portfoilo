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
                            <p> The application named "socio" is a social media platform designed for user interaction and content sharing. It features a clean and structured interface, enabling users to post updates, add multimedia, and engage with trending discussions. The main functions include:<br/><br/>- Post Creation: Users can enter text, add images, voice recordings, and emojis, with a 150-word limit for each post.<br/>- Navigation Menu: A sidebar provides quick access to Home, Notifications, Messages, Profile, and Trending sections.<br/>- User Profile Display: Includes the username, verification badge, and recent activity.<br/>- Engagement Buttons: Options for sharing posts, viewing recent interactions, and account details.</p><br/>
                            <div className="githubAndLink">
                                <div className="github">
                                    <a href="https://github.com/sunsunarto/Quiz_16_Sunaryo/">Github Link</a>
                                </div>
                                <div className="link">
                                    <a href="https://quiz-16-sunaryo.vercel.app/"> Link</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectSlide slide2">
                            <h1>Cerita Anekdot</h1>
                            <button onClick={() => setShowImage2(!showImage2)}>
                                {showImage2 ? "Close" : "Show Image"}
                            </button>
                            {showImage2 && <img src={Tekscerita} alt="teks cerita Anekdot" />}
                            <p>The application appears to be a story-sharing website titled "Cerita Anekdot" (Anecdote Stories).<br/><br/>Story Section: The page prominently displays an anecdote text. there is around 10 Anecodote short stories<br/>Visual Elements: There is an illustration of a cartoon chef preparing food in a kitchen, reinforcing the theme of the story.<br/>Simple Layout: The website uses a light peach background and a clean, readable design, focusing on anecdotal storytelling.</p>
                            <div className="githubAndLink">
                                <div className="github">
                                    <a href="https://github.com/sunsunarto/Projekbi">Github Link</a>
                                </div>
                                <div className="link">
                                    <a href="https://projekbi-3i6x.vercel.app/">Link</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectSlide slide3">
                            <h1>Dessert Shop</h1>
                            <button onClick={() => setShowImage3(!showImage3)}>
                                {showImage3 ? "Close" : "Show Image"}
                            </button>
                            {showImage3 && <img src={DessertShop} alt="Dessert Shop" />}
                            <p>This image shows an online dessert shop interface. The shop offers various desserts with images, names, and prices displayed.<br/><br/>Each dessert has an "Add to Cart" button below it. On the right side of the image, there is a cart section labeled "Your Cart (0)" with an illustration of two pieces of cake and a note stating "your added items will appear here."</p>
                            <div className="githubAndLink">
                                <div className="github">
                                    <a href="https://github.com/sunsunarto/Dessert-Shop-Part-2.">Github Link</a>
                                </div>
                                <div className="link">
                                    <a href="https://dessert-shop-part-2.vercel.app/">Link</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectSlide slide4">
                            <h1>Post Management App</h1>
                            <button onClick={() => setShowImage4(!showImage4)}>
                                {showImage4 ? "Close" : "Show Image"}
                            </button>
                            {showImage4 && <img src={PostManagementApp} alt="Post Management App" />}
                            <p>This image showcases a Post Management App with a clean and simple interface designed for handling user-generated posts.<br/><br/>Title & Body Input Fields: Users can enter the title and content of a post."Add Post"<br/>Button: A blue button allows users to submit their posts.<br/>Recent Posts Section: Displays previously added posts, including sample content.</p>
                            <div className="githubAndLink">
                                <div className="github">
                                    <a href="https://github.com/sunsunarto/Post-Management-App">Github Link</a>
                                </div>
                                <div className="link">
                                    <a href="https://post-management-app-939m.vercel.app/">Link</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectSlide slide5">
                            <h1>User Registration Form</h1>
                            <button onClick={() => setShowImage5(!showImage5)}>
                                {showImage5 ? "Close" : "Show Image"}
                            </button>
                            {showImage5 && <img src={UserRegistrationForm} alt="user Registration Form" />}
                            <p>The application appears to be a user-friendly form interface designed for registration and login. It features a blue background with white text for easy readability. Users can choose between two options they are<br/>"Register" Button – For new users signing up. "Login" Button – For existing users to access their accounts.</p>
                            <div className="githubAndLink">
                                <div className="github">
                                    <a href="https://github.com/sunsunarto/User-Authentication-System">Github Link</a>
                                </div>
                                <div className="link">
                                    <a href="https://user-authentication-system-ten.vercel.app/">Link</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectSlide slide6">
                            <h1>movie collection</h1>
                            <button onClick={() => setShowImage6(!showImage6)}>
                                {showImage6 ? "Close" : "Show Image"}
                            </button>
                            {showImage6 && <img src={MovieCollection} alt="movie collection" />}
                            <p>This app, titled "Movie Collection," is designed for searching and displaying movies.<br/><br/>Search Feature: At the top, there is a search bar where users can type a movie name. In this example, "Detective Conan" is entered, followed by a blue "Search" button.<br/>Movie Listings: Below the search bar, the app displays a collection of movie posters related to the search query.<br/>Movie Details: Each poster showcases a different movie title and artwork, highlighting key characters and themes from the series.</p>
                            <div className="githubAndLink">
                                <div className="github">
                                    <a href="https://github.com/sunsunarto/Sunaryo_movie_collection_gsap_part_2">Github Link</a>
                                </div>
                                <div className="link">
                                    <a href="https://sunaryo-movie-collection-gsap-part-2-9mco.vercel.app/">Link</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectSlide slide7">
                            <h1>charity organization (copy)</h1>
                            <button onClick={() => setShowImage7(!showImage7)}>
                                {showImage7 ? "Close" : "Show Image"}
                            </button>
                            {showImage7 && <img src={CharityOrganization} alt="charity organization" />}
                            <p>This website belongs to a charity organization dedicated to supporting homeless animals.<br/><br/>Header: Displays the organization's name along with a "Donate" button.<br/>Mission Statement: Introduces the organization as a team of volunteers, socially active companies, and media personalities helping low-income shelters and foster caretakers.<br/>Primary Goal: Focuses on providing essential resources like food, medicine, and shelter for animals in need.<br/>Inspirational Message: Highlights the importance of caring for animals and how they contribute to human well-being.<br/>Quote: Includes a meaningful quote: "Animals need to have friends. Just like humans." — James Herriot.<br/>Call to Action: Encourages visitors to support animals in difficult times by donating or joining the movement.</p>
                            <div className="githubAndLink">
                                <div className="github">
                                    <a href="https://github.com/sunsunarto/quiz-GSAP-ScrollTrigger">Github Link</a>
                                </div>
                                <div className="link">
                                    <a href="https://quiz-gsap-scroll-trigger-bi21.vercel.app//">Link</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectSlide slide8">
                            <h1>Paste (copy)</h1>
                            <button onClick={() => setShowImage8(!showImage8)}>
                                {showImage8 ? "Close" : "Show Image"}
                            </button>
                            {showImage8 && <img src={Paste} alt="" />}
                            <p>The Paste app appears to be a clipboard manager designed to improve efficiency and organization. Based on its promotional banner, the app has received a major update with a new look and feel, emphasizing a more intuitive and user-centric experience.<br/><br/>Clipboard Management = Likely allows users to store and organize copied text, images, and other content for easy access.<br/>Enhanced Efficiency = Promotes streamlined workflow and faster access to saved clippings.<br/>Modern Interface = Suggests a visually refreshed design for better usability.<br/>User-Centric Update = The app now focuses more on enhancing ease of use and accessibility.</p>
                            <div className="githubAndLink">
                                <div className="github">
                                    <a href="https://github.com/sunsunarto/Sunaryo-mid-test-gsap">Github Link</a>
                                </div>
                                <div className="link">
                                    <a href="https://sunaryo-mid-test-gsap-e86f.vercel.app/">Link</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="projectSlide slide8">
                            <h1> Advice Generator</h1>
                            <button onClick={() => setShowImage9(!showImage9)}>
                                {showImage9 ? "Close" : "Show Image"}
                            </button>
                            {showImage9 && <img src={AdviceGen} alt="" />}
                            <p>The Advice Generator is a simple yet interactive web application designed to provide users with random pieces of advice.<br/><br/>Loading Indicator: Initially, three dots ("...") are displayed, suggesting that advice is being fetched.<br/>Dice Button: At the bottom, a green circular button with a dice icon is present. Clicking this button generates a new piece of advice.</p>
                            <div className="githubAndLink">
                                <div className="github">
                                    <a href="https://github.com/sunsunarto/Advice-Generator">Github Link</a>
                                </div>
                                <div className="link">
                                    <a href="https://advice-generator-coral-iota.vercel.app/">Link</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Project;