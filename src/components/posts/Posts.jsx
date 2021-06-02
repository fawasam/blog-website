import React from 'react'
import styled from "styled-components"
import Post from '../post/Post'


const Posts = () => {
    return (
        <PostStyle>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
           
        </PostStyle>
    )
}

const PostStyle =styled.div ` 
flex:9;
display: flex;
flex-wrap: wrap;
margin: 30px;

`

export default Posts
