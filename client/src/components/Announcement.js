import styled from 'styled-components'


const Container = styled.div`
    height: 30px; 
    background-color: teal; 
    color: white; 
`



function Announcement() {
    return (
        <Container>
            Super Deal! Free shippingon orders over $50
        </Container>
    )
}

export default Announcement
