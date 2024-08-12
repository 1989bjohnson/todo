import React, {useState} from "react";
import {createTask} from "../api/api";
import "../style/modal.scss";

const AddTaskForm = ({handleClose}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const task = {title, description};
        try {
            const response = await createTask(task);
            handleClose();
        }
        catch (e) {
            console.log(e);
        }
    }

    return <>
        <div className='overlay'></div>
        <div className='add-task-form modal'>
            <button className='button button-close' onClick={handleClose}>X</button>
            <h2>Add Task</h2>
            <form>
                <input type='text'
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                       placeholder='Title'
                       required/>
                <input type='text'
                       value={description}
                       onChange={(e) => setDescription(e.target.value)}
                       placeholder='Description'
                       required/>
                <button className='button button-add-task' onClick={(e) => handleSubmit(e)} type='submit'>Add Task</button>
            </form>
        </div>
    </>;
}

export default AddTaskForm;