import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 60px; 

`

const Wrapper = styled.div`
    padding: 10px 20px; 
    display: flex; 
    justify-content: space-between; 
`

const Left = styled.div`
    width: 33.3%; 
`
const Right = styled.div`
    width: 33.3%; 

`
const Center = styled.div`
    width: 33.3%; 
`

function Navbar() {
    return (
        <Container>
            <Wrapper>
            <Left>Tempor proident nulla ea cillum quis pariatur culpa ex do aute voluptate adipisicing. Deserunt culpa eu irure ex ullamco sit eiusmod eiusmod elit cupidatat sint. Cupidatat aute nisi duis sit nostrud cupidatat do ullamco laborum sit adipisicing excepteur labore ut. Commodo eiusmod ut consequat sunt nisi. Ad Lorem consequat adipisicing est irure. Adipisicing mollit reprehenderit consequat laborum consectetur aliqua enim amet consectetur aliquip ipsum proident id.</Left>
            <Center>Center</Center>
            <Right>Right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
