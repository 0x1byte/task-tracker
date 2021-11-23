import React, { useContext, useState } from 'react';
import { Context } from '../App';

const Task = ({ id, task, checked }) => {
    const [isEditing, setEditState] = useState(false);
    const { tasks, setTasks } = useContext(Context);
    const checkHandler = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, checked: !task.checked } : task));
    }
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }
    const editTask = () => {
        setEditState(!isEditing);
    }
    const handleEdit = (id, e) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, task: e.target.value } : task));
    }
    return (
        <div className="Task">
            {isEditing ? (
                <>
                    <div className="Task-Content">
                        <input type="checkbox" name="Task-Check" id="Task-Check" checked={checked} onChange={() => checkHandler(id)} />
                        <input type="text" className="Task-Title-Edit" placeholder={task} onChange={(e) => handleEdit(id, e)} />
                    </div><div className="Task-Buttons">
                        <i className="fas fa-check fa-lg" onClick={editTask}></i>
                    </div>
                </>
            ) : (
                <>
                    <div className="Task-Content">
                        <input type="checkbox" name="Task-Check" id="Task-Check" checked={checked} onChange={() => checkHandler(id)} />
                        <p className="Task-Title">{task}</p>
                    </div><div className="Task-Buttons">
                        <i className="far fa-trash-alt fa-lg" onClick={() => removeTask(id)}></i>
                        <i className="far fa-edit fa-lg" onClick={editTask}></i>
                    </div>
                </>
            )}

        </div>
    )
}

export default Task;
