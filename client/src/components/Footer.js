import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
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

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex; 
    align-items: center; 
`

const Payment = styled.img`
    width: 50%;
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
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>
                    1600 Pennslyvania Avenue, Washington, D.C.
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>
                    +1 913-944-9984
                </ContactItem>
                <ContactItem>
                    <Mail style={{marginRight:"10px"}}/>
                    Jeff.Woltjen@gmail.com
                </ContactItem>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
            </Right>
        </Container>
    )
}

export default Footer
