import React, { Component } from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import registerIcon from '../images/registerIcon.svg'
import facebookIcon from '../images/facebookIcon.svg'
import instagramIcon from '../images/instagramIcon.svg'
import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" variant="light" style={{
                    marginTop:'30px',
                    
                }}>
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#StartPage">Start Page</Nav.Link>
                                <Nav.Link href="#About">About</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                                <Nav.Link href="#Products">Products</Nav.Link>
                                <Nav.Link href="#Contact">Contact</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link className='register' href="#register-now" style={{
                                    marginRight:'40px',
                                    color:'white',
                                    backgroundColor:'#3F2743',
                                    borderRadius:'30px',
                                    paddingLeft:'40px',
                                    paddingRight:'40px',
                                    paddingTop:'10px',
                                    paddingBottom:'10px',
                                }} > <img src={registerIcon} alt='...' height='25px' width='25px' /> Register now</Nav.Link>
                                <Nav.Link href="#login" style={{
                                   borderRadius:'30px',
                                   paddingLeft:'40px',
                                   paddingRight:'40px',
                                   paddingTop:'10px',
                                   paddingBottom:'10px',
                                   backgroundColor:'#DBDEE4',
                                }} >Login</Nav.Link>
                                <Nav.Link style={{
                                    marginLeft:'10px',
                                }} ><img src={instagramIcon} height='25px' width='25px' /></Nav.Link>
                                <Nav.Link><img src={facebookIcon}  height='25px' width='25px' /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
