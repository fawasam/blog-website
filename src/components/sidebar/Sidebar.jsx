import React from 'react'
import styled from "styled-components"

const Sidebar = () => {
    return (
        <Side>
        <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
        amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>

        </Side>
    
)
}

const Side =styled.div ` 
flex:3; 
margin: 20px;
padding-bottom: 30px;
background-color: #fdfbfb;
border-radius: 10px;
height: fit-content;
display: flex;
flex-direction: column;
align-items: center;

.sidebarItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
      padding: 14px 34px;
      text-align: left: 
  }
}
.sidebarTitle {
    margin: 10px;
    padding: 5px;
    width: 80%;
    border-top: solid 1px #a7a4a4;
    border-bottom: solid 1px #a7a4a4;
    text-align: center;
    font-family: "Varela Round", sans-serif;
    font-size: 12px;
  line-height: 19px;
  color: #222222;
  font-weight: 600;
}
.sidebarList {
  list-style-type: none;
  margin-bottom: 30px;
}
>p{
    padding: 30px;
}
img{
    margin-top: 15px;
  width: 250px;
  height: 250px;
}

.sidebarListItem {
  display: inline-block;
width: 50%;
  margin-top: 15px;
  cursor: pointer;
}
.sidebarSocial {
  margin-top: 15px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sidebarIcon {
  font-size: 16px;
  margin-left: 10px;  cursor: pointer;

}

`
export default Sidebar
