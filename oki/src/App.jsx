import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import { Link, Route, Routes } from 'react-router-dom'
import Chat from './pages/Chat';
import Bills from './pages/Bills';

import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/dashboard' element={<Dashboard />} ></Route>
        <Route path='/inventory' element={<Inventory />} ></Route>
        <Route path='/Chat' element={<Chat />} ></Route>
        <Route path='/Bills' element={<Bills />} ></Route>
      </Routes>
      
    </>
  );
}

export default App;
