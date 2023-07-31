import './Todo.css';
import PropTypes from 'prop-types';

const Todo = ({ todo, toggle }) => {
  const handleToggle = () => toggle(todo.id);

  return (
    <div className="Todo">
      <h3>{todo.name}</h3>
      <p>Due: {todo.due}</p>
      <input type="checkbox" id={`todo-item-${todo.id}`} checked={todo.isDone} onChange={handleToggle} /> <label htmlFor={`todo-item-${todo.id}`}>Completed</label>
    </div>
  )
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Todo;
