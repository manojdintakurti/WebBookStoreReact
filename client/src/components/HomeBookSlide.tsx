import React from "react"
import StarRating from "./StartRating";
import {BookItem} from "../types";



function HomeBookSlide(props:BookItem){
    return (
        <div className="carousel-items">
            <img className="book-image"
                 src={require("../images/bestsellers/"+props.imgu)}
                 alt="Book 1"
            />
            <div className="book-info">
                <h3>{props.title}</h3>
                <p>{props.author}</p>
                <StarRating />
                <p className="price">Price: ${props.price}</p>
            </div>
        </div>
    );
}
export default HomeBookSlide;