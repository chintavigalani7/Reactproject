import React from 'react'
import './Style1.css'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div>
    <div class="container">
    <h2>Registration</h2>
    <form>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" required/>

      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" required/>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required/>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required/>

     <Link to="/login"> <button type="submit">Register</button></Link>
    </form>
  </div>
    </div>
  )
}

export default Register