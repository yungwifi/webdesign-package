import React, { Component } from 'react';
import styled from 'styled-components'

const HeroImage = styled.div`
background-image: url('https://i.imgur.com/oaZnpvi.jpg');
min-height: 120vh;
height: 100vh;
background-size: cover;
height: 100%;
margin: 0 auto;`

class Hero extends Component {
    render() {
        return (
            <div>
                <HeroImage />
            </div>
        );
    }
}

export default Hero;