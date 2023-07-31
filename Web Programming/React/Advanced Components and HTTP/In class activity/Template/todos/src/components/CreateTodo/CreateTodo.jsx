import './CreateTodo.css';
import PropTypes from 'prop-types';
import moment from 'moment';

const CreateTodo = ({ create }) => {
  const todo = {
    name: '',
    due: moment().format(`YYYY-M-D`),
    isDone: false,
  };

  const updateTodoProp = (prop, value) => {
    todo[prop] = value;
  };

  const createTodo = () => {
    if (!todo.name) {
      alert(`Enter a valid todo name!`);

      return;
    }
    if (!todo.due) {
      alert(`Enter a valid due date!`);

      return;
    }

    create(todo);
  };

  return (
    <div id="create-todo-form">
      <h2>Create a new todo</h2>
      <label htmlFor="todo-name">Name:</label> <input type="text" id="todo-name" onChange={(e) => updateTodoProp('name', e.target.value)} name="todo-name" /><br /><br />
      <label htmlFor="todo-date">Due date:</label> <input type="date" id="todo-date" onChange={(e) => updateTodoProp('due', e.target.value)} name="todo-date" /><br /><br />
      <label htmlFor="todo-status">Completed:</label> <input type="checkbox" id="todo-status" onChange={(e) => updateTodoProp('isDone', e.target.checked)} name="todo-status" /><br /><br />
      <button className="button" onClick={createTodo}>Create</button>
      <button className="button cancel" onClick={() => alert(`You canceled todo creation!`)}>Cancel</button>
    </div>
  );
}

CreateTodo.propTypes = {
  create: PropTypes.func.isRequired
};

export default CreateTodo;
