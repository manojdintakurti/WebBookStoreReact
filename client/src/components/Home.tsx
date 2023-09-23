import React from "react"
import "../CSS/Home.css"
import StarRating from "./StartRating";
import HomeBookSlide from "./HomeBookSlide";
function Home(){
    return (
        <div className="home-container">
            <div className="home-carousel">
                <div className="banner-container">
                    <div className="banner">
                        <img
                            src={require("../images/banner-1.jpg")}
                             alt="Banner 1"
                        />
                        <img
                            src={require("../images/banner-2.jpg")}
                            alt="Banner 2"
                        />
                        <img
                            src={require("../images/banner-3.png")}
                            alt="Banner 3"
                        />
                        <img
                            src={require("../images/banner-2.jpg")}
                            alt="Banner 2"
                        />
                        <img
                            src={require("../images/banner-1.jpg")}
                            alt="Banner 2"
                        />
                        <img
                            src={require("../images/banner-3.png")}
                            alt="Banner 3"
                        />
                    </div>
                    <div className="banner-marker">
                        <span className="marker"></span>
                        <span className="marker"></span>
                        <span className="marker"></span>
                        <span className="marker"></span>
                        <span className="marker"></span>
                    </div>
                </div>
            </div>
            <div className="best-sellers">
                <div className="best-sellers-title">
                    <h3>Best Sellers</h3>
                    <a href="/best-sellers" className="view-all">View All</a>
                </div>
                <div className="best-sellers-items">
                    <div className="carousel-container">
                        <HomeBookSlide bookId={1001} title={"Dune"} author={"Frank Herbert"} price={87.75} isPublic={true} imgu={"1.png"}/>
                        <HomeBookSlide bookId={1003} title={"DC Super"} author={"Preschool"} price={35.75} isPublic={true} imgu={"2.png"}/>
                        <HomeBookSlide bookId={1002} title={"Friction"} author={"Cala Railer"} price={36.00} isPublic={true} imgu={"3.png"}/>
                        <HomeBookSlide bookId={1001} title={"Halloween"} author={"Preschool"} price={8.99} isPublic={true} imgu={"4.png"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;