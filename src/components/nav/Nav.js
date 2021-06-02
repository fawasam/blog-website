import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

const Nav = () => {
    const user =true;
    return (
        <Topbar>
        <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                    <div className="topListItem"><Link  className="link" to="/">ABOUT</Link></div>
                    <div className="topListItem"><Link  className="link" to="/">CONTACT</Link></div>
                    <div className="topListItem"><Link  className="link" to="/write">WRITE</Link></div>
                    <div className="topListItem"><Link className="link"  to="/">{user&& "LOGOUT"}</Link></div>
                </ul>

            </div>
            <div className="topRight">
                {user ? (<img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                   alt="profile" />) : 
                   (
                       <ul className="topList">
                           <li className="topListItem">
                       <Link className="link" to="/login">LOGIN</Link>

                           </li>
                           <li className="topListItem">
                       <Link className="link" to="/register">REGISTER</Link>

                           </li>
                       </ul>
                   )}
                
                <i className="topSearchIcon fas fa-search"></i>

            </div>
        </Topbar>
    )
}

const Topbar = styled.div ` 
width: 100%;
height: 50px;
position: sticky;
top: 0;
display:  flex;
align-items: center;
font-family: "Josefin Sans", sans-serif;
background-color: #fff;
z-index:9;

.topLeft, .topRight{
    flex: 3;
    display: flex;
    align-self: center;
    justify-content: center;

}
.topCenter{
    flex: 6;
}
.topImg{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}
.topIcon{
    font-size: 20px;
    margin-right: 10px;
    color: #444;
    cursor: pointer;
}
.topList{
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
    .topListItem{
        font-size: 18px;
        margin-right: 20px;
        font-weight: 300;
        cursor: pointer;
    }
}
.topSearchIcon{
    font-size: 18px;
    color:#666 ;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
}

`

export default Nav
