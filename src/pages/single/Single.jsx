import React from 'react'
import styled from "styled-components"

import Sidebar from '../../components/sidebar/Sidebar'
import Singlepost from '../../components/singlePost/Singlepost'

const Single = () => {
    return (
        <SingleStyle>
            <Singlepost />
             <Sidebar/> 
        </SingleStyle>
    )
}

const SingleStyle =styled.div ` 
 display: flex;
`

export default Single
