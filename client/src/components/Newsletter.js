import { Send } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div``

const Title = styled.h1``

const Description = styled.p``

const InputContainer = styled.div``

const Input = styled.input``

const Button = styled.button``


function Newsletter() {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get updates on your favorite products.</Description>
            <InputContainer>
                <Input placeholder="your email"/>
                 <Button>
                    <Send/>
                </Button>   
            </InputContainer>
        </Container>
    )
}

export default Newsletter