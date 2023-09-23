import React from "react"
import "../CSS/BookItemCarousel.css"
import {BookItem} from "../types";

function BookItemCarousel(props:BookItem){
    return (
        <div className="book-item">
            <div className="image-container">
                <img src={require("../images/"+props.imgu)} width="150" height="200"/>
                {props.isPublic &&
                    <button className="read-now-button"><i className="fa-solid fa-book-open"></i></button>
                }
            </div>
            <span className="book-title">{props.title}</span>
            <span className="book-author">{props.author}</span>
            <div className="price-container">
                <span>Price</span>
                <span className="money">${props.price}</span>
                <button className="buy-now-button">Buy Now</button>
            </div>
        </div>
    );
}
export default BookItemCarousel;