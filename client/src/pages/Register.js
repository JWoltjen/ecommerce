import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw; 
    height: 100vh; 
`
const Wrapper = styled.div``


const Title = styled.h1``
const Form = styled.form``
const Input = styled.input``
const Agreement = styled.span``
const Button = styled.button``

function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="user name"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                </Form>
            </Wrapper>
        </Container>
            
    )
}

export default Register
