import React, { useContext } from 'react';
import { Context } from '../App';
import Task from './Task';
const TaskList = () => {
    const { tasks } = useContext(Context);
    return (
        <div className="Task-List">
            {tasks.length > 0 ? (
                tasks.map(({ id, task, checked }) => <Task key={id} id={id} task={task} checked={checked} />)
            ) : (
                <p>کاری تعریف نشده است!</p>
            )}
        </div>
    )
}

export default TaskList;
