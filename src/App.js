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
          }
      }

//Function is called right before the first render.
      componentWillMount() {
          BooksAPI.getAll().then(books => {
              this.setState({
                  read: books.filter(b => b.shelf === 'read'),
                  wantToRead: books.filter(b => b.shelf === 'wantToRead'),
                  currentlyReading: books.filter(b => b.shelf === 'currentlyReading')
              })
          })
      }
       render() {
          return (
              <div className="app">
                  <Route path="/" exact render={() => (
                      <BookShelfList
                          currentlyReading={this.state.currentlyReading}
                          wantToRead={this.state.wantToRead}
                          read={this.state.read}
                      />
                  )}/>
