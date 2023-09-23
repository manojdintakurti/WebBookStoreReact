import React from "react"
import {categoryList, categoryListItem} from "../types";

function CategoryList(){
    return (
        <div className="category-menu">
            <h3> All Categories</h3>
            {
                categoryList.map((category:categoryListItem,index)=>(
            <div className={category.isSelected?"category-item cat-active":"category-item"}>
                <a href="#"><span>{category.categoryName}</span><span className="fa-solid fa-angle-right" /> </a>
            </div>))
        }
        </div>
    );
}
export default CategoryList;