import React from 'react';

import './taskfilter.css';

export default function TaskFilter() {

    return(
        <div className='filter-options'>
            <div style={{ border: '25px', width: '2rem' }}>
                PLACEHOLDER
            </div>

            <div style={{ display: 'flex' }}>
                <label className='switch'>
                    <input type='checkbox' />
                    <span className='slider'></span>
                </label>
            <h2 style={{ marginLeft: '1rem' }}>Hide Finished</h2>
            </div>
        </div>
    );
};