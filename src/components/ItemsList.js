import React, { Component } from 'react';
import LeftItem from './LeftItem';
import RightItem from './RightItem';
import styled from 'styled-components'

const Container = styled.div`
border: solid black 1px;
display: flex;
align-items: center;
flex-direction: column;`

class ItemsList extends Component {
    render() {
        return (
            <div>
                <Container >
                    <LeftItem />
                    <RightItem />
                </Container>
            </div>
        );
    }
}

export default ItemsList;