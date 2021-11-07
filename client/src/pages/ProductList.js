import { Announcement } from '@material-ui/icons'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const Container = styled.div`

`

const Title = styled.h1`
    margin: 20px; 
`

const FilterContainer = styled.div`
    display: flex; 
    justify-content: space-between; 
`

const Filter = styled.div`
    margin: 20px; 
`

const FilterText = styled.span`
    font-size: 20px; 
    font-weight: 600; 
`

const Select = styled.select`

`

const Option = styled.option`

`

function ProductList() {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>
                Dresses
            </Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>

                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
