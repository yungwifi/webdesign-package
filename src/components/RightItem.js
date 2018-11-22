import React, { Component } from 'react';
import styled from 'styled-components'

const Image = styled.div`
border: solid black 1px;
height: 30vh;
width: 120vw;`

const Container = styled.div`
display: flex;
flex-direction: row;
border: solid black 1px;
width: 75vw;`

class RightItem extends Component {
    render() {
        return (
            <div>
                <Container >
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                        in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Image />
                </Container>
            </div>
        );
    }
}

export default RightItem;