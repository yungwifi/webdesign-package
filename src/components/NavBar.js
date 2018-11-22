import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const NavButtons = styled.div`
display: flex;
align-items: center;`

const NavContainer = styled.div`
display: flex;
flex-direction: row;
width: 100vw;
justify-content: space-between;`

const BrandLogo = styled.div`
display: flex;
align-items: center;`

const ContactButton = styled.div`
border: solid grey 1px;
border-radius: 10px;`

class NavBar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar >
                        <NavContainer >
                            <BrandLogo >
                                <Typography variant="h6" color="inherit" >
                                    Brand Name / Logo
                                </Typography>
                            </BrandLogo>
                            <NavButtons >
                                <Button color="inherit">Nav Item</Button>
                                <Button color="inherit">Nav Item</Button>
                                <Button color="inherit">Nav Item</Button>
                                <Button color="inherit">Nav Item</Button>
                                <ContactButton >
                                    <Button color="inherit">Contact</Button>
                                </ContactButton>
                            </NavButtons>
                        </NavContainer>
                    </Toolbar>
                </AppBar>

            </div >
        );
    }
}

export default NavBar;