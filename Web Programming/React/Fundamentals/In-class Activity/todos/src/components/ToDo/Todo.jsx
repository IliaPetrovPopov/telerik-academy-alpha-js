import "./Todo.css"
import PropTypes from 'prop-types'

const Todo = ({todo, toggle}) => {
    return (
        <div>
            <h2 className="todo-name">{todo.name}</h2>
            <p>Due: {todo.due}</p>
            <div className="toggle">
                <input type="checkbox" id={todo.id} className="toggle-checkboxes" onClick={toggle}/>
                <label htmlFor={todo.id}>Completed</label>
            </div>
        </div>
    )
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    toggle: PropTypes.func.isRequired,
}

export default Todo