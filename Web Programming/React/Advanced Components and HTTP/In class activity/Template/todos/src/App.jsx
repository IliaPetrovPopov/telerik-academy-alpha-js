import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Todo from "./components/Todo/Todo";
import todos from "./data/todos";
import "./App.css";
import CreateTodo from "./components/CreateTodo/CreateTodo";

function App() {
  const toggle = (id) => alert(`To do ${id} is completed!`);
  const createTodo = (todo) => alert(`To do ${JSON.stringify(todo)} is created!`);

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
      </div>
      <CreateTodo create={createTodo} />
      <Footer />
    </div>
  );
}

export default App;
