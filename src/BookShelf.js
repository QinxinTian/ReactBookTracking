import React, {Component} from 'react';
import Book from "./Book.js";
 export default class BookShelf extends Component {
    render() {
        const {shelfTitle, bookList} = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                //handle the corner case that the book shelf is empty.
                {books && bookList.length > 0
                  ? <ol className="books-grid">
                        {
                            bookList.map((book, index) => {
                                <li key={index}>
                                    <Book
                                    title={book.title}
                                    author={book.authors}
                                    id={book.id}
                                    imageLinks={books.imageLinks}
                                    shelf={books.shelf}
                                    imageUrl={book.coverURL}/>
                                </li>
                              })
                            }
                            </ol>
                  :   <div className='books-container-empty'>
                          <h3>No books to display</h3>
                          </div>
                        }
                </div>
            </div>
        )
    }
}
