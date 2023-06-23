import React from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import TasksContainer from './components/tasks-container/TasksContainer';
import Footer from './components/footer/Footer';

import './App.css';

export default function App() {
  return (
    <main className='main'> 
      <Navbar />
      <div className='content'>
        <Sidebar />
        <TasksContainer />
      </div>
      <Footer />
    </main>
  );
};
