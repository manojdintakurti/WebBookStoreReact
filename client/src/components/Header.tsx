import React, {useState} from "react";
import {Link} from "react-router-dom";
import SearchBox from "./searchbox";
import NavigationBar from "./NavigationBar";

function AppHeader(){
    return(
        <div className="Header">
            <div className="header-logo">
                <div className="website-log">
                    <Link to="/">
                        <img
                            src={require('../images/logo.jpg')}
                            alt="Logo" width="281" height="40" />
                    </Link>
                </div>
                <div className="icons-tray pull-right">
                    <Link to="/"><i className="fas fa-light fa-house fa-lg" ></i></Link>
                    <Link to="/wishlist"><i className="fas fa-regular fa-heart fa-lg"></i></Link>
                    <Link to="/cart"><i className="fas fa-light fa-cart-shopping fa-lg"></i></Link>
                </div>
            </div>
            <div className="header-options">
                    <NavigationBar />
            </div>
        </div>
    )
}
export default AppHeader;
