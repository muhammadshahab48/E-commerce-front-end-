import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Mainlogo from '../images/myLogo.png';
import headerImg from "../images/topImage.jpg"
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    // MDBDropdown,
    // MDBDropdownToggle,
    // MDBDropdownMenu,
    // MDBDropdownItem,
    MDBCollapse,
} from "mdb-react-ui-kit";

const NavbarPage = () => {


    const [showBasic, setShowBasic] = useState(false);
    return (
        <div>
            <div
                className='p-4 text-center bg-image'
                style={{ backgroundImage: `url(${headerImg})`, height: 'auto', width: "auto" }}
            ></div>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>
                        <img
                            alt="Website Logo"
                            src={Mainlogo}
                            width="250"
                            height="65"
                            className="d-inline-block align-top" />
                    </MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='mr-auto mb-4 mb-lg-0'>

                        </MDBNavbarNav>

                        <form className='d-flex input-group mr-auto'>
                            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                            <MDBBtn color='primary'>Search</MDBBtn>
                        </form>
                        <MDBIcon className='mr-auto'>
                            {/* <i class="fas fa-shopping-bag"></i> */}
                            <Nav.Link className='fas fa-shopping-bag'> </Nav.Link>
                        </MDBIcon>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>

            {/* <Navbar expand="lg" id="basic-navbar-nav" style={{backgroundImage: `url(${headerImg})`}} > </Navbar> */}
            <Navbar expand="lg" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Toggle className='fas fa-sort-amount-down' style={{ color: "white", fontSize: "30px" }} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto" style={{ justifyContent: "center" }}>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">Sign In </Nav.Link>
                            <Nav.Link href="/Signup">Sign Up </Nav.Link>
                            <MDBNavbarNav fullWidth={false} className="flex-row" style={{ justifyContent: "right" }}>
                                <MDBNavbarItem>
                                    <MDBNavbarLink
                                        className="pe-2"
                                        href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        <MDBIcon fab icon="youtube" />
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink
                                        className="px-2"
                                        href="https://www.facebook.com/mdbootstrap"
                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        <MDBIcon fab icon="facebook-f" />
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink
                                        className="px-2"
                                        href="https://twitter.com/MDBootstrap"
                                        rel="nofollow"
                                        target="_blank"
                                    >
                                        <MDBIcon fab icon="twitter" />
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>

                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarPage;