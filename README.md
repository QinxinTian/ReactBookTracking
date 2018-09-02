# ReactBookTracking
- For easy display:
https://reactbookstrackingnsearching.herokuapp.com/
- I created a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application, also I implemented the searching functionality that you can search the books then add to the shelves.



# Note
- Componentwillmount: This function is called right before the component’s first render
- therefore calling setState() synchronously in this method will not trigger an extra rendering
- The getAll() method of the FormData interface returns all the values associated with a given key from a FormData object.
- setState - function or object.
- Avoid copying props into state! This is a common mistake.
- This is the only lifecycle hook called on server rendering.
- link : router
- Props - to: A Location descriptor: String / object.
- $ npm install --save react-router-dom


- The component is able to change its own internal state using this.setState()
- Each time state is changed, React knows and will call render() to re-render the component. This allows for fast, efficient updates to your app's UI.
- Props refer to attributes from parent components
- put state inside the class instead of the constructor
- avoid initializing the state with the props
- By having a component manage its own state, any time there are changes made to that state, React will know and automatically - make the necessary updates to the page
- This is one of the key benefits of using React to build UI components: when it comes to re-rendering the page, we just have - to think about updating state. We don't have to keep track of exactly which parts of the page change each time there are updates. We don't need to decide how we will efficiently re-render the page. React compares the previous output and new output, determines what has changed, and makes these decisions for us. This process of determining what has changed in the previous and new output is called reconcilation.
- Email.propTypes = {
text: PropTypes.string.isRequired.
}
  
- Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
- However, elements can also represent user-defined components.
- function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
- By the time componentDidMount is called, the component has been rendered once
- Using DidMount makes it clear that data won’t be loaded until after the initial render. This reminds you to set up initial state property, so you don’t end up with undefined state causes errors
- the render is required in the react
- When we are rendering in the App.js that is as <div name = ….>, we are referring to that component in another js file.
BooksAPI.search


- event delegation
- The prevState comes from the setState api: https://facebook.github.io/react/docs/component-api.html#setstate
