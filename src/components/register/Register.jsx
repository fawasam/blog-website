import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

function Register() {
    return (
        <RegisterStyle>
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your name..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">register</button>
      </form>
        <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
          </button>
            
        </RegisterStyle>
    )
}


const RegisterStyle = styled.div ` 
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  .registerForm {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.registerTitle{
  font-size: 50px;
}
.registerForm > label {
  margin: 10px 0;
}

.registerInput {
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 10px;
}


.registerInput:focus {
  outline: none;
}

.registerButton {
  margin-top: 20px;
  cursor: pointer;
  background-color: teal;

  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;
  text-align: center;
}
.registerLoginButton {
  position: absolute;
  top: 60px;
  right: 20px;
  cursor: pointer;
  padding: 10px;
  border: none;
  color: white;
  border-radius: 10px;
  background-color: lightcoral;

}
















`
export default Register
