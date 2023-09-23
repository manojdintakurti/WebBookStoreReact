import React from "react"
import CategoryList from "./CategoryList";
import "../CSS/AppCategory.css"
import {BookItem, booksList} from "../types";
import BookItemCarousel from "./BookItemCarousel";

function AppCategory(){
    return (
        <main className="body">
            <div className="category-main">
                <CategoryList />
                <div className="category-grid">
                    {
                        booksList.map((book:BookItem) =>(
                            <BookItemCarousel bookId={book.bookId} title={book.title} author={book.author} price={book.price} isPublic={book.isPublic} imgu={book.imgu} />
                        ))
                    }
                </div>
            </div>
        </main>
    );
}
export default AppCategory;