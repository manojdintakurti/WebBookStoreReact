import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import SearchBox from "./searchbox";

const NavigationBar = () => {
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = (searchTerm:String) => {
        console.log(searchTerm);
    };
    return (
        <div className="navbar">
            <div className="search-bar">
                <SearchBox onSearch={handleSearch}/>
            </div>
            <div className="dropdown primary-color-text">
                <Link to="/categories">Categories <i className="fa-solid fa-angle-down"></i></Link>
                <div className="dropdown-content">
                    <Link to="categories">Fiction</Link>
                    <Link to="/categories">Fantasy</Link>
                    <Link to="/categories">Romance</Link>
                    <Link to="/categories">Mystery</Link>
                    <Link to="/categories">Biography</Link>
                    <Link to="/categories">Photography</Link>
                </div>
            </div>
            <div>
                <Link to="/ebooks" className="ebooks-link">Ebooks</Link>
            </div>
            <div>
                <button className="login-button">Login</button>
            </div>
        </div>
    );
};

export default NavigationBar;
