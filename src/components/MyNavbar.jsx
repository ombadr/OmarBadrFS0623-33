import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar expand='xl' variant='dark'>
        <Container fluid>
          <Navbar.Brand href='#home'>
            <img
              src='assets/imgs/logo.png'
              alt='Netflix logo'
              style={{ height: '60px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto fw-bold'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link' className='text-white'>
                TV Shows
              </Nav.Link>

              <Nav.Link href='#link'>Movies</Nav.Link>
              <Nav.Link href='#link'>Recently Added</Nav.Link>
              <Nav.Link href='#link'>MyList</Nav.Link>
            </Nav>
            <div className='d-flex align-items-center'>
              <InputGroup className='icons'>
                <FormControl
                  placeholder='Search and press enter'
                  aria-label='search'
                  aria-describedby='basic-addon1'
                />
              </InputGroup>
              <p className='mb-0 mx-2 text-white p-2'>KIDS</p>
              <i className='bi bi-bell-fill text-white fs-4 p-2'></i>
              <i className='bi bi-person-fill text-white fs-4 p-2'></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MyNavbar;
