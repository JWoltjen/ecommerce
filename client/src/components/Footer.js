import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    display: flex; 
`

const Left = styled.div`
    flex: 1; 
    display: flex; 
    flex-direction: column; 
    padding: 20px; 
`

const Center = styled.div`
    flex: 1;
    padding: 20px; 
`
 
const Right = styled.div`
    flex: 1; 
    padding: 20px; 
`

const Logo = styled.h1`

`

const Description = styled.p`
    margin: 20px 0px; 
`

const Title = styled.h3`
margin-bottom: 30px; 
`

const List = styled.ul`
    margin: 0; 
    padding: 0; 
    list-style: none; 
    display: flex; 
    flex-wrap: wrap; 
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px; 
`


const SocialContainer = styled.div`
    display: flex; 
`
const SocialIcon = styled.div`
    width: 40px; 
    height: 40px; 
    border-radius: 50%; 
    color: white; 
    background-color: #${props=>props.color}; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    margin-right: 20px; 
`

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>
                    JCommerce
                </Logo>
                <Description>
                        Nulla occaecat ad aliqua laborum excepteur magna. Dolor anim cupidatat duis ipsum consectetur aliquip et dolor esse fugiat tempor minim tempor et. Nisi velit aute consequat Lorem adipisicing exercitation elit amet dolor quis in pariatur.
                </Description>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men's Fashion</ListItem>
                    <ListItem>Women's Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>High Explosives</ListItem>
                    <ListItem>Armored Vehicles</ListItem>        
                    <ListItem>Robot Insurance</ListItem>
                    <ListItem>Thetan Reading</ListItem>        
                </List>
            </Center>
            <Right>

            </Right>
        </Container>
    )
}

export default Footer
