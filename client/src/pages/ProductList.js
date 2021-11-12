import { Announcement } from '@material-ui/icons'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { useLocation } from 'react-router'
import React, {useState} from 'react'
import { red } from '@material-ui/core/colors'

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
    margin-right: 20px; 
`

const Select = styled.select`
    padding: 10px; 
    margin-right: 20px; 
`

const Option = styled.option`

`

function ProductList() {
    const location = useLocation(); 
    const category = location.pathname.split("/")[2]
    const [filter, setFilters] = useState({})

    const handleFilters = (e) => {
        const value = e.target.value; 
        setFilters({
            [e.target.name]: value
        })
    }
    console.log(filter.color)
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
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option disabled>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select onChange={handleFilters}>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
