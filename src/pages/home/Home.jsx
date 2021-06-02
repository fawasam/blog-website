import React from 'react'
import styled from "styled-components"
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'



const Home = () => {
    return (
        <> 
        <Header />
       
       {/* posts and sidebar */}
        <Homebar>
        <Posts/>
        <Sidebar/>
        </Homebar>
        </>

    )
}

const Homebar =styled.div `
display: flex;
`

export default Home
