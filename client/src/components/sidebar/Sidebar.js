import React, { useState } from 'react';

import './sidebar.css';


export default function Sidebar() {

    let myCategories = [
        { name: "Finance", colour: "#000" },
        { name: "Work", colour: "#00FF00" },
        { name: "Biscuit", colour: "#0000FF" }
    ];

    const selectCat = (e) => console.log(`${e.target.id} category selected`);
    
    let displayCategories = myCategories.map((cat) => {
        return(
            <button key={cat.name} id={cat.name} className='categorie' onClick={(e) => selectCat(e)}>
                <div>
                    <h4 id={cat.name}>{cat.name}</h4>
                </div>
                <div>
                    <div id={cat.name} style={{ borderRadius: '50%', backgroundColor: `${cat.colour}`, height: '1rem', width: '1rem' }} />
                </div>
            </button>
        );
    });

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return(
        <aside className='side-bar'>
            <div className='icons'>
                <span className="material-symbols-outlined">
                    lists
                </span>
                <h4>Task View</h4>
            </div>
            <div className='icons'>
                <span className="material-symbols-outlined">
                    calendar_month
                </span>
                <h4>Calendar View</h4>
            </div>
            <div className='icons'>
                <span className="material-symbols-outlined">
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