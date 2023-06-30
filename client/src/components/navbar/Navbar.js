import React from 'react';

import './navbar.css';

export default function Havbar() {
    return (
        <nav className='navbar'>
            <div className='nav-left'>
                <input className='nav-search-bar' type="search" placeholder="Search.." />
            </div>
            <span className='nav-bar-span' />

            <div className='nav-right'>
                <div className="material-symbols-outlined">
                    add
                </div>
                <div className="material-symbols-outlined">
                    help
                </div>
                <div className="material-symbols-outlined">
                    notifications
                </div>
                <div className='profile-nav-icon'>
                    JT
                </div>
            </div>
        </nav>
    );
};