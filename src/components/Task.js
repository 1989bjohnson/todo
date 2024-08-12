import {deleteTask, updateTask} from "../api/api";
import React from "react";

const Task = ({task, handleUpdate}) => {
    const handleComplete = async (id) => {
        await updateTask(id);
        handleUpdate();
    }

    const handleDelete = async (id) => {
        await deleteTask(id);
        handleUpdate();
    }
    
    return (
        <>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.status}</p>
            <button className='button button-complete' onClick={() => handleComplete(task._id)}>Complete</button>
            <button className='button button-delete' onClick={() => handleDelete(task._id)}>Delete</button>
        </>
    )
}

export default Task;