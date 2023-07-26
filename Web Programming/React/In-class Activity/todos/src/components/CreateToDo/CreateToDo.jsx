import PropTypes from 'prop-types'

const CreateToDo = ({create}) => {

    const todo = {
        name: '',
        due: '',
        isDone: false,
    }

    const updateToDoProp = (prop, value) => {
        todo[prop] = value;
    }

    const createToDo = () => {

        create(todo);
    }

    return (
        <div id="create-to-do-container">
            <h2>Create a new todo</h2><br />
            <div id="name-box">
              <input name="Name:" type="text" id="create-name" onChange={(e) => updateToDoProp('name', e.target.value)}/>
              <label htmlFor="create-name"> Name</label>
            </div><br />

            <div id="date-box">
              <input type="text" id="create-due-date" placeholder="mm/dd/yy" onChange={(e) => updateToDoProp('due', e.target.value)}/>
              <label htmlFor="create-due-date"> Due date</label>
            </div><br />

            <div id="completed-box">
            <input name="Name:" type="checkbox" id="create-name" />
            <label htmlFor="create-name"> Completed</label>
            </div><br />
            
            <button id="create-btn" onClick={createToDo}>Create</button>
            <button id="cancel-btn" onClick={() => {alert(`You canceled the creation`)}}> Cancel</button>

        </div>
    );
};

CreateToDo.proptypes = {
    create: PropTypes.func.isRequired,
}

export default CreateToDo;