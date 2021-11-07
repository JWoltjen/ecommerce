import { Announcement } from '@material-ui/icons'
import styled from 'styled-components'
import Navbar from '../components/Navbar'

const Container = styled.div`

`

const Title = styled.h1`
`

const FilterContainer = styled.div``

const Filter = styled.div`

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
                    Filter1
                </Filter>
                <Filter>
                    Filter2
                </Filter>
            </FilterContainer>
        </Container>
    )
}

export default ProductList
