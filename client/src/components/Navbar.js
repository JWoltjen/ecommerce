import React from 'react'
import styled from 'styled-components'
import Search from '@material-ui/icons/Search'

const Container = styled.div`
    height: 60px; 

`

const Wrapper = styled.div`
    padding: 10px 20px; 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
`

const Left = styled.div`
    display: flex; 
    align-items: center; 

    flex: 1;
`

const Language = styled.span`
    font-size: 14px; 
    cursor: pointer; 
`

const SearchContainer = styled.div`
    border: 1px solid lightgray; 
    display: flex; 
    align-items: center; 
    margin-left: 25px; 
    padding: 5px; 
`

const Input = styled.input`
    border: none; 
`

const Right = styled.div`
    flex: 1; 

`

const Logo = styled.h1`
    font-weight: bold; 
`

const Center = styled.div`
    flex: 1; 
    text-align: center; 
`

const MenuItem = styled.div`
    font-size: 14px; 
    cursor: pointer; 
`

function Navbar() {
    return (
        <Container>
            <Wrapper>
            <Left>
                <Language>
                 EN
                </Language>
            <SearchContainer>
                <Input/>
                <Search/>
            </SearchContainer>
            </Left>
            <Center><Logo>JCommerce</Logo></Center>
            <Right>
                <MenuItem>
                    Register
                </MenuItem>
            </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
