import React from 'react';

import './newtask.css';

export default function NewTask() {
    return(
        <div className='new-task'>
            
            <div className='new-task-input'>
                <label name='task-name'>
                    <input type='text' placeholder='New task...'/>
                </label>
            </div>

            <div className='new-task-options'>

                <div>
                    <h2 className='card-options'>date</h2>
                    <label name='date-selector'>
                        <input type='date' />
                    </label>
                </div>

                <div>
                    <h2 className='card-options'>category</h2>
                    <select>
                        <option value="volvo">Groceries</option>
                        <option value="saab">Work</option>
                        <option value="fiat">Biscuit</option>
                        <option value="audi">Misc</option>
                    </select>
                </div>

                <div>
                    <h2 className='card-options'>repeats</h2>
                    <select>
                        <option value="volvo">doesn't repeat</option>
                        <option value="saab">daily</option>
                        <option value="fiat">weekly</option>
                        <option value="audi">monthly</option>
                    </select>
                </div>
            </div>


        </div>
    );
};
