import React, {useState, useEffect} from "react";
import {getTasks, deleteTask} from "../api/api";
import AddTaskForm from "./AddTaskForm";
import Task from "./Task";
import "../style/tasklist.scss";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showAddTaskForm, setShowAddTaskForm] = useState(false);

    const fetchTasks = async () => {
        try {
            console.log("fetching tasks");
            const response = await getTasks();
            let tasks = await response.data;
            setTasks(tasks);
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks().then(r => console.log(r));
    }, []);

    const handleClose = () => {
        setShowAddTaskForm(false);
        fetchTasks().then(r => console.log(r));
    }
    
    const handleUpdate = async () => {
        fetchTasks().then(r => console.log(r));
    }

    return (
        <>
            {loading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            <div className='task-list'>
                {tasks.map(task => (
                    <div className='task' key={task._id}>
                        <Task task={task} handleUpdate={() => handleUpdate()}/>
                    </div>
                ))}
                <button className='button button-add-task' onClick={() => setShowAddTaskForm(!showAddTaskForm)}>Add Task
                </button>
                {showAddTaskForm && <AddTaskForm handleClose={() => handleClose()}/>}
            </div>
        </>
    );
}

export default TaskList;