import React, { useState } from 'react';

import './taskcard.css';

export default function TaskCard() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className='task-card'>

            <div className='card-default'>

            <div className='checkbox'>
                <label name='card-checbox'>
                    <input type='checkbox' />
                </label>
            </div>
            <div className='card-text'>
                <h1>Pay Credit Card Bill</h1>
                <p>due in 5 days</p>
            </div>
            <div className='drop-down-arrow'>
                {
                isOpen ? 
                    <span className='material-symbols-outlined' style={{ fontSize:'5rem', cursor:'pointer' }} onClick={toggleDropdown}>
                    arrow_drop_up
                    </span>   
                :
                    <span className='material-symbols-outlined' style={{ fontSize:'5rem', cursor:'pointer' }} onClick={toggleDropdown}>
                    arrow_drop_down
                    </span>
                }
            </div>

            </div>

            <div className={`dropdown-body ${isOpen && 'open'}`}>

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
