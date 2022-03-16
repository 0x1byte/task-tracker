import React, { useContext, useState } from 'react'
import { Context } from '../App';

const AddTask = () => {
    const [task, setTask] = useState('');
    const [taskState, setTaskState] = useState(false);
    const { tasks, setTasks } = useContext(Context);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task !== "") {
            const newTask = {
                id: Math.floor(Math.random() * 10000),
                task: task,
                checked: taskState
            };
            setTasks([...tasks, newTask])
        } else {
            alert("لطفا نام کار را وارد کنید!")
        }
    }
    return (
        <div className="addTask">
            <input type="text" name="task-text" id="task-text" placeholder="نام کار" onChange={(e) => setTask(e.target.value)} />
            <div className="Task-Control">
                <div className="Check-Control">
                    <label htmlFor="save-task">انجام شده؟</label>
                    <input type="checkbox" name="task-checkbox" id="task-checkbox" onClick={(e) => setTaskState(!taskState)} />
                </div>
                <button type="submit" id="save-task" onClick={(e) => handleSubmit(e)}>ذخیره</button>
            </div>
        </div>
    )
}

export default AddTask;
