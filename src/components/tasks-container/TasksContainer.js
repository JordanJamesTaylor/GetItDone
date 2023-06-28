import React from 'react';
import NewTask from '../new-task/NewTask';
import TaskFilter from '../task-filter/TaskFilter';
import CurrentTasks from '../current-tasks/CurrentTasks';

import './taskscontainer.css';

export default function TasksContainer() {
    return(
        <div className='tasks-container'>
            <NewTask />
            <TaskFilter />
            <CurrentTasks />
        </div>
    )
}