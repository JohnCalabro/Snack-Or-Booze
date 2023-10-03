### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

React router allows us to handle routing in React and is especially useful on the client-side. It allows us to make a single-page application without the need to refresh the page.

- What is a single page application?

A single-page app operates within the browser. It does not require you to refresh the page.

- What are some differences between client side and server side routing?

server-side routing operates on the server, on the server side we communicate with the back-end, the server holds all of the behind-the-scenes operations, for example when we make our own APIs with our databases we can post information to it and fetch it to display on the browser. Client-side routing are the routes the user sees on their browser, it occurs on the front-end. Certain routes will lead to different pages on the router, for example the user can reach a home route, or a sign up form route which are both visable to them because they must interact with them.

- What are two ways of handling redirects with React Router? When would you use each?

One way is to implement useNavigate (which has replaced useHistroy in version 6), it lets use navigate using react code allowing you to easily change location. The other way is to use the Navigate component which changes the location when it is rendered. Becuase useNaviage is a hook it cannot be used directly with class-based components, so in this case you would use the Navigate component instead. 

- What are two different ways to handle page-not-found user experiences using React Router? 

You can make an error route that handles all 404s, or you can directly handle the errors in the routes themselves. 

- How do you grab URL parameters from within a component using React Router?

You can use react router's useParams hook to grab URL params. 

- What is context in React? When would you use it?

useContext is a great way to avoid prop drilling when you have to use information in multiple components. Specifically it allows you to access the value to the context object. Essentially this gives you access to data you want to be global. 

- Describe some differences between class-based components and function
  components in React.

A function component is a JS function that accepts props, then returns JSX to be rendered to the browser. With a class based component you must extend from React. If you want to use hooks they cannot be used with class class-based components. Function components can do everything a class component can do but are simpler and more readable. 


- What are some of the problems that hooks were designed to solve?

Hooks can save you from having to wrap everything, plus they provide a nice alternative to the more complex classes, in fact they allow you to use react without classes at all. They also allow you to manage state form the function component which is also very useful