import React from 'react'
import styled from "styled-components"

const Post = () => {
    return (
        <PostStyle>
            <img
        className="postImg"
        src="https://images.pexels.com/photos/7760789/pexels-photo-7760789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
       <div className="postInfo">
           <div className="postCats">
               <div className="postCat">Music</div>
               <div className="postCat">Life</div>
           </div>
           <span className="postTitle">
               Lorem ipsum dolor sit amet.
           </span>
           <span className="postDate">1 hour ago</span>

       </div>
       <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
        </PostStyle>
    )
}

const PostStyle =styled.div `
width:385px;
margin: 0px 25px 40px 25px;
display: flex;
flex-direction: column;


.postImg {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 7px;
}
.postInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.postCat {
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 11px;
  color: #be9656;
  line-height: 19px;
  margin-top: 15px;
  margin-right: 10px;
  cursor: pointer;
}

.postTitle {
  font-family: "Josefin Sans", Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 900;
  margin-top: 15px;
  cursor: pointer;
}

.postDate {
  font-family: "Lora", serif;
  font-style: italic;
  font-size: 13px;
  font-weight: 400;
  color: #999999;
  margin-top: 15px;
}

.postDesc {
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #444444;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

`

export default Post
