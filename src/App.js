import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelfList from "./components/BookShelfList";


export default class BooksApp extends React.Component {
      constructor(args) {
          super(args);
          this.state = {
              read: [],
              wantToRead: [],
              currentlyReading: []
              loading: true,
          }
      }

      componentDidMount() {
          BooksAPI.getAll()
            .then(books => this.setState({ books }))
            .catch(errorMessage);
        }

        componentDidUpdate(_, prevState) {

          if (prevState.books.length !== this.state.books.length) {

            BooksAPI.getAll()
              .then(books => this.setState({ books }))
              .catch(errorMessage);
          }
        }

        /**
         changeBook - The book to manipulate
         newValue - The new shelf value for the book
         */
        changeShelf(changeBook, newValue) {
          // Push change to through API
          BooksAPI.update(changeBook, newValue)
          .catch(errorMessage);

          this.setState(prevState => {
            let books = []; // For modifying data before pushing to state

            // Book to change was not in the previous state
            if (!prevState.books.includes(changeBook)) {
              changeBook['shelf'] = newValue;                 // Add and set the new shelf value
              books.concat(prevState.books).push(changeBook); // Combine with the previous state

              addMessage(newValue);
            }
            else {
              // Return a modified array from previous state
              books = prevState.books.map(book => {

                if (book === changeBook) {
                  book.shelf = newValue;  // Modify the shelf value
                  return book;            // Push into new array
                }
                else {
                  return book;            // Otherwise, push unmodified
                }
              })

              moveMessage(newValue);
            }

            return { books }; // Pass new value to the state
          });

        }
    addBookToShelf(book, shelf) {
        book.shelf = shelf
        this.setState({ [shelf]: this.state[shelf].concat(book) })
    }
       render() {
          return (
              <div className="app">
              <div className='header'>
              MyReads
              </div>
              <Switch>
                  <Route exact path="/" render={() => (
                      <BookShelfList
                          currentlyReading={this.state.currentlyReading}
                          wantToRead={this.state.wantToRead}
                          read={this.state.read}
                      />
                  )}/>
                  <Route
                      path='/search'
                      render={() => (
                          <SearchPage
                              currentlyReading={this.state.currentlyReading}
                              wantToRead={this.state.wantToRead}
                              read={this.state.read}
                          />
                      )}
                  />
                  <Route component={NotFoundPage} />
              </Switch>
          </div>
      </div>
