import React, { useState } from 'react';

import './sidebar.css';


export default function Sidebar() {

    let myCategories = [
        { name: "Finance", colour: "#000" },
        { name: "Work", colour: "#00FF00" },
        { name: "Biscuit", colour: "#0000FF" }
    ];
    
    let displayCategories = myCategories.map((cat) => {
        return(
            <div className='categorie'>
                <div>
                    <h4>{cat.name}</h4>
                </div>
                <div>
                    <div style={{ borderRadius: '50%', backgroundColor: `${cat.colour}`, height: '1rem', width: '1rem' }} />
                </div>
            </div>
        );
    });

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return(
        <aside className='side-bar'>
            <div className='icons'>
                <span class="material-symbols-outlined">
                    lists
                </span>
                <h4>Task View</h4>
            </div>
            <div className='icons'>
                <span class="material-symbols-outlined">
                    calendar_month
                </span>
                <h4>Calendar View</h4>
            </div>
            <div className='icons'>
                <span class="material-symbols-outlined">
                    folder
                </span>
                <h4>Categories</h4>
                {
                isOpen ? 
                    <span className='material-symbols-outlined' style={{ fontSize:'2rem', cursor:'pointer' }} onClick={toggleDropdown}>
                    arrow_drop_up
                    </span>
                :
                    <span className='material-symbols-outlined' style={{ fontSize:'2rem', cursor:'pointer' }} onClick={toggleDropdown}>
                    arrow_drop_down
                    </span>
                }
            </div>
            <div className={`categories ${isOpen && 'open'}`}>
                {displayCategories}
            </div>
        </aside>
    );
};