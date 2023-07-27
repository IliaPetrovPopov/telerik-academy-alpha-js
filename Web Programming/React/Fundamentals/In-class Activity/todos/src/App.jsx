import './App.css'
import CreateToDo from './components/CreateToDo/CreateToDo.jsx'
import Header from './components/Header/Header.jsx'
import Todo from './components/ToDo/Todo.jsx'
import todos from './data/todos.js'

function App() {
  const toggle = (e) => alert(`To do with id: ${e.target.id} is toggled`);
  const createToDo = (e) => alert(`To do with name ${e.name} is created`);
  return (
    <div id='wrapper'>
      <CreateToDo create={createToDo}/>
     {/* <Header title='To-do App'/>
      { todos.length !== 0 
      ? <div className="to-do-container">
        {todos.map(todo => {
          return <Todo key={todo.id} todo={todo} toggle={toggle}/>
        })}
      </div> 
      : <p>Please add todos to see them here!</p>}

      <footer><p>&copy; 2023 Todos.react.js.io</p></footer> */}
      </div>
  )
}

export default App
