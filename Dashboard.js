import React from 'react'
import './Style1.css'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('Email', 'chintavi@gmail.com');
    localStorage.removeItem('password', '1234'); 
    navigate('/login', { replace: true });

   }
  return (
    <div>
  <header>
    <h1>Dashboard</h1>
  </header>
  
  <nav>
    <ul>
      <li><a href="#" class="active">Dashboard</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Orders</a></li>
      <li><a href="#">Customers</a></li>
    </ul>
  </nav>
  
  <section class="dashboard">
    <h2>Dashboard</h2>
    <div class="stats">
      <div class="stat">
        <h3>Products</h3>
        <p>100</p>
      </div>
      <div class="stat">
        <h3>Orders</h3>
        <p>50</p>
      </div>
      <div class="stat">
        <h3>Customers</h3>
        <p>200</p>
      </div>
    </div>
  </section>
  <button onClick={logout}>logout</button>
    </div>
  )
}

export default Dashboard