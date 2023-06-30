import React from 'react';
import TaskCard from '../task-card/TaskCard';

import './currenttasks.css';

export default function CurrentTasks(){
    return (
        <div className='current-tasks'>
            <div className='current-task-scroll'>
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div> 
        </div>
    );
};