import React from 'react';
import NewTask from '../new-task/NewTask';
import CurrentTasks from '../current-tasks/CurrentTasks';

import './taskscontainer.css';

export default function TasksContainer() {
    return(
        <div className='tasks-container'>
            Tasks Container
            <NewTask />
            <CurrentTasks />
        </div>
    )
}