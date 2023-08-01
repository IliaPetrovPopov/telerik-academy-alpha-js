import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Todo from "./components/Todo/Todo";
import todosData, { nextId } from "./data/todos";
import "./App.css";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import { useEffect, useState } from "react";
import { BASE_URL } from "./common/constants";
import Loading from "./hoc/Loading/Loading";
import AppError from "./components/AppError/AppError";

function App() {

  const [todos, setTodos] = useState(todosData);
  const [createSection, setCreateSection] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/todos`)
    .then(response => response.json())
    .then(data => {
      if(data.error) {
        setError(true);
      } else {
        setTodos(data);
      }
    })
    .catch(e => alert(e.message))
    .finally(() => setLoading(false));
  }, []);

  const toggle = id => {
    let exists = false;

    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        exists = true;
        return {...todo, isDone: !todo.isDone};
      }

      return todo;
    });

    if(!exists) {
      return (
        <AppError>
          {'Such todo doesn\'t exist!'}
        </AppError>
      )
    }
    
    fetch(`${BASE_URL}/todos/:id`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( {
        updatedTodos,
      })
    })
    .then(response => response.json())
    .then(data => {
      if(data.error) {
        setError(true);
      } else {
        setTodos(updatedTodos);
      }
    })
    .catch(error => console.log(error.message))
    .finally(() => setLoading(false));
  };

  const createTodo = ({name, due, isDone}) => {
    setLoading(true);

    const newToDo = {
    id: nextId(),
    name: name,
    due: due,
    isDone: isDone 
  }

  fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application-json',
    },
    body: JSON.stringify({
      name,
      due,
      isDone,
    }),
  })
  .then(response => response.json())
  .then(data => {
    if(data.error) {
      setError(true);
      throw new Error(data.message);
    } 

    setTodos([{...todos, newToDo}])
  })
  .catch(e => {
    throw new Error(e.message)
  })
  .finally(() => setLoading(false));
  };

  const changeCreateSection = () => {
   setCreateSection(!createSection)
  }

  const seeIds = () => {
    todos.forEach(todo => console.log(todo.id))
  }

  if(loading) {
    return (
      <div>
        <Header />
          <Container>
            <Loading>
              <h2>The content is loading... Please Wait</h2>
            </Loading>
          </Container>
      </div>

    )
  }

  if(error) {
    return (
      <div>
        <Header />
          <Container>
            <AppError message={error}/>
          </Container>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className="todo-container">
        {todos.length ? (
          todos.map((todo) => (
            <Todo key={todo.id} todo={todo} toggle={toggle} />
          ))
        ) : (
          <p>No todos</p>
        )}
      </div> {
      createSection === true 
      ? <CreateTodo create={createTodo} createSection={changeCreateSection}/>
      : <button id="create-button" onClick={changeCreateSection}>Add to-do</button>
      }
      <button onClick={seeIds}>See elements id's</button>
      <Footer />
    </div>
  );
}

export default App;
