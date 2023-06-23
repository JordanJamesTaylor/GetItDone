import React from 'react';

import './navbar.css';

export default function Havbar() {
    return (
        <nav className='navbar'>
            <div className='nav-left'>
                <span class="material-symbols-outlined">
                    home
                </span>
                <input className='nav-search-bar' type="text" placeholder="Search.." />
            </div>

            <span className='nav-bar-span' />

            <div className='nav-right'>
                <div class="material-symbols-outlined">
                    add
                </div>
                <div class="material-symbols-outlined">
                    help
                </div>
                <div class="material-symbols-outlined">
                    notifications
                </div>
                <div className='profile-nav-icon'>
                    JT
                </div>
            </div>
        </nav>
    );
};