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

//Function is called right before the first render.
      componentDidMount() {
      BooksAPI.getAll()
      .then(books => this.setState({ books }))
      .catch(errorMessage);
   }
      onShelfChange = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then(
                this.setState((state) => ({
                    books: state.books.map(b => {
                        if (b.title === book.title) {
                            b.shelf = shelf;
                            return b
                        } else {
                            return b
                        }
                    }),
                    loading: false
                }))
            )
    };
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
