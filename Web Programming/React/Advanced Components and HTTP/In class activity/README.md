<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## React ToDo Client

### 1. Description

Seems like the whole front-end team you had been working with to deliver the Todo app got fired and now its your job to do it! Use the Todo API you have created and create a Todo web client with React to consume the API and satisfy the customers.

<br>

### 2. Project information

You will be using React with functional components to build the client app. The activity is continuous and ongoing, and each activity after the first one will build on the previous one refactoring existing code and adding new functionality. You will be provided with the ToDo Server at a later point

<br>

### 3. Goals

First we will use our knowledge about component's state to replace the alerts of promised behavior with the real one.
Then that we can visualize, update the `isDone` status and create new todos it's time to replace hardcoded todos data with real data from a running REST API, provided with the `template`. The **goal** is connect the app with the API, load todos from the server, send requests to create and update todos and keep the app data in sync with the API.

We will exercise the following:

- extending the application with new components
- connecting and making request to a REST API
- using asynchronous code in React
- fetching data from a REST API
- handling HTTP request errors
- handing state changes depending on asynchronous calls

<br>

### 4. Available Scripts

In the project directory, you can run:

```bash
  cd todos
  npm install
```

#### `npm run dev`

Runs the app in the development mode.<br />

The page will reload if you make edits.<br />

<br>

## Part 1 - State

### 5. App Component

The `App` component will hold the state of the client, which for now will only be the todos array. You can initialize the state from the hardcoded todos in `src/data/todos.js` and you will also need to use `updateTodos` to update the todos' state whenever necessary

```js
const [appTodos, updateTodos] = useState(todos);
```

You will also need to change the update method for the todos which for the time being will only switch the `isDone` state of the todo between `true` and `false`.

```js
 const toggle = id => { 
  // Find todo with the passed id and update its 'is-it-done' status
 }
 ```

 Do not forget to update the state, in order to see the change in the **App** component.

### 6. Adding new todos

You already have a method that toggles the `isDone` state of a single todo, now you need to implement the `createTodo` method that will add a new todo to the list. Remember state is immutable and you can't just say

```js
 appTodos.push(todo); // this will not work
 ```

Instead you need to compose the new state and add the new todo there.

The `createTodo` methods will have the following signature:

```js
const createTodo = ({ name, due, isDone}) => {
  // missing implementation
}
```

And we're using object destructuring in order to keep the passed `todo` object safe from mutation.

<br>

*Note: You are keeping the 'Console' in your developer tools open all the time, right? Is it okay? Perhaps we need to remember that we've created and exported the nextid() function in the todos.js module.*

How does this work?

<br>

#### Passing state through props to "child" `Todo` component

For each single todo the `App` component passes the todo to the `Todo` component. Then the `Todo` component uses the `todo` prop to visualize it.

```
                   +---------------+
                   | App Component |
                   |    [State]    |
        +----------+-------+-------+----------+
        |                  |                  |
        |                  |                  |
 todo[0]|           todo[1]|           todo[2]|
        |                  |                  |
        |                  |                  |
+-------v-------+  +-------v-------+  +-------v-------+
|Todo Component |  |Todo Component |  |Todo Component |
+---------------+  +---------------+  +---------------+
```

<br>

#### Triggering the state update of the parent `App` component

Because the `App` component also passes to the `Todo` component the `toggle` method, each `Todo` component can call that method, elevating the change event from the child to the parent and letting the parent `App` update its state, before it passes it again to each individual `Todo`.

```
                    +---------------+
                    | App Component |
                    |    [State]    |
         +--------->+-------^-------+<---------+
         |                  |                  |
         |                  |                  |
toggle(0)|         toggle(1)|         toggle(2)|
         |                  |                  |
         |                  |                  |
 +-------+-------+  +-------+-------+  +-------+-------+
 |Todo Component |  |Todo Component |  |Todo Component |
 |               |  |               |  |               |
 +---------------+  +---------------+  +---------------+

```

### 7. Showing and hiding the `CreateTodo` component

Finally, you need to add a `Create Todo` button the `App`'s view. When you click the button the `CreateTodo` component should show. The `CreateTodo` component should show until one of the two conditions is met:

- you click the `Create Todo`'s `Create` button, add a new todo to the `App`'s state and hide the `CreateTodo` component
- you click on the `Create Todo`'s `Cancel` button

Because the `App` component holds the state of the application, think of a way to handle the logic for handling showing/hiding the child `CreateTodo` component so changes to the factors dictating the showing conditions can be triggered from the `App` component itself and from `CreateTodo` as well.

## Part 2 - Hooks

Now let's make things a bit more real and start using some todos data.

### 8. Todo API server

<br>

#### 8.1 Run the server

The server is pretty basic, all you need to do is install dependencies with `npm install` and then run it with `npm start`. To avoid any port collision with the React app, the server runs on port `5555`.

<br>

#### 8.2 Server endpoints

You will utilize the following endpoints:

- `GET /todos`
- `POST /todos`
- `PUT /todos/:id`

Detailed typing for request and response objects:

<br>

##### `GET /todos`

Request: no body

Response:

```ts
// array of
{
  id: number;
  name: string;
  due: string;
  isDone: boolean;
}
```

<br>

##### `POST /todos`

Request body:

```ts
{
  // name length: [2-20]
  name: string;
  due: string;
  isDone: boolean;
}
```

Response:

```ts
{
  id: number;
  name: string;
  due: string;
  isDone: boolean;
}
```

<br>

##### `PUT /todos/:id`

Request body (question marks indicate optional properties):

```ts
{
  name?: string;
  due?: string;
  isDone?: boolean;
}
```

Response:

```ts
{
  id: number;
  name: string;
  due: string;
  isDone: boolean;
}
```

<br>

### 9. What stays the same

Since the `App` component holds the app's state and is ultimately responsible for adding and updating todos to the list, you don't need to make changes to the single `Todo` component and to the `CreateTodo` component. Using single responsible components and composing them in other components allows us to decouple the application logic. You will be making changes to the `App` component mainly and adding a few new components.

<br>

### 10. New components

Making requests to the server with async functions like `fetch` requires us to handle a few more things:

- communicate to the user that the page is loading data from the server
- display data when it's loaded from the server
- display an error page when something goes wrong with the request

In order to accommodate for that you need to create a few more components:

- the `AppError` component which will show when there is some error with the request to the API
- the `Loading` component which will show when the app is still waiting for the data to come from the server

We will also need one more higher-order component which will be a `container` for other components and elements.

<br>

### 11. The `AppError` component

The `AppError` component takes an error `message` prop and just shows the message.

```js
const AppError = ({ message }) => {
  // render code here
};
```

The `message` prop should be a `string`.

<br>

### 12. The `Loading` component

The `Loading` component is a higher-order component that takes no props, but will render one pass child element:

```js
const Loading = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
};

Loading.propTypes = {
  children: PropTypes.element.isRequired,
};
```

You can now do that

```js
<Loading>
  <h1>Todos are loading...</h1>
</Loading>
```

<br>

### 13. The `Container` component

The `Container` component is similar to the `Loading` component in the way that it also is a higher-order component, doesn't take any props and renders one or more children. Since it will be the main view container of the app, you can apply any stylization for the main view here. We will talk more about that in the next assignment.

Prop validation for the children is a bit more complicated, since there could be one or more child components passed to the container:

```js
Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
```

<br>

### 14. Making calls to the API

You can now setup everything necessary to make calls to the Todos API. Create a new directory `src/common` and there create the `constants.js` file which will hold all app constants. For now it will only have the base url of the API:

```js
export const BASE_URL = 'http://localhost:5555';
```

You will be using `fetch` to make calls to the API. Because React doesn't support `async` function style, you will need to use promises and chaining:

```js
fetch(`${BASE_URL}/todos`)
  .then(response => response.json())
  .then(/* consume the data */)
  .catch(/* handle errors */)
```

Note: `fetch` will only reject when the query fails. It will resolve (the request will return response) even if the server sends status code 4xx or 5xx. You will need to check if the response contains the requested data or just an error message and throw the error yourself in order to reject the promise chain and enter the `catch` method:

```js
// server responds with 401
fetch(/* endpoint */)
  .then(response => response.json())
  .then(result => {
    if (result.error) {
      throw new Error(result.message); // this will go to "catch(/* handle errors */)"
    }

    // results here holds the successful response
    // handle state updates
  })
  .catch(/* handle errors */)
```

<br>

### 15. `App` component state changes

Some significant changes need to be done to the `App` component. You will need to consider the following:

- when the component is initialized it should make a call to the API to retrieve the list of all todos
- while the component is waiting for the response it should be in the `loading` state when it should only show the `Loading` component
- when the component receives the list of all todos, it should update its todos state and *no longer* be loading - instead it should render the todos
- if the request fails, the component should change its state to `error` and show the `AppError` component with the correct error message

You will need to make the call to the API the first time you load the component. For this you should put the request inside a `useEffect` hook:

```js
useEffect(() => {
  // set the state to loading
  // make a call to the API
  // if data is retrieved successfully set the loading state to false and render data
  // if there is an error, set the error state to true and show the AppError component
}, []); // pass an empty array of dependencies, the request doesn't depend on any other data inside the component
```

You should also implement the following functions:

```js
const toggle = id => {
  // find the todo with id
  // show an error if it doesn't exist and return

  // make a call to  PUT /todos/:id and pass the updated todo
  // if the request is successful update the list of all todos with the changes and change loading to false
  // if there is an error change the error state to true and display the AppError component
};
```

```js
const createTodo = ({ name, due, isDone}) => {
  // hide the create form
  // change the loading state to true
  // make a call to  POST /todos and pass the new todo
  // if the request is successful add the created todo to the list of todos and change loading to false
  // if there is an error change the error state to true and display the AppError component

  fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      due,
      isDone,
    }),
  })
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        throw new Error(result.message);
      }

      updateTodos([...appTodos, result]);
    })
    .catch(error => setError(error.message))
    .finally(() => setLoading(false));
};
```

<br>

### 16. Rendering different "pages" based on state changes

Now you can imitate a SPA application by switching between different views based on what the state of the `App` component is. There are the following cases:

- the state is in loading: `loading` is true, `error` is `null`
- the state is in error: `loading` is false, `error` is a `string` (the error message)
- the state is stable, show the `CreateTodo` component: `loading` is false, `error` is `null`, `isCreateFormVisible` is true
- default state, when all the data is loaded and no further changes are pending on waiting request - show all todos

To make this easier for you to understand and handle you are provided with the following template:

```jsx
const App = () => {
  // load todos
  // functions for handling changes and creating todos

  // show loading "page"
  if (loading) {
    return (
      <div>
        <Header />
        <Container>
          <Loading>
            <h1>Loading todos...</h1>
          </Loading>
        </Container>
      </div>
    )
  }

  // show error "page"
  if (error) {
    return (
      <div>
        <Header />
        <Container>
          <AppError message={error} />
        </Container>
      </div>
    )
  }

  // show create todo "page"
  if (isCreateFormVisible) {
    return (
      <div>
        <Header />
        <Container>
          <CreateTodo create={createTodo} close={hideCreateForm} />
        </Container>
      </div>
    )
  }

  // default return
  // show all-todos "page"
  return (
    <div>
      <Header />
      <Container>
        <button id="create-todo-btn" onClick={() => toggleCreateForm(true)}>Create Todo</button>
        {appTodos && appTodos.map(todo => <Todo key={todo.id} todo={todo} toggle={toggle} />)}
      </Container>
    </div>
  );
}
```
