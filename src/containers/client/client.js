import React, { Component } from 'react';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

class Client extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="bg-light justify-content-between">
          	<Navbar.Brand href="#home">
		      <img
		        src="https://g.foolcdn.com/art/companylogos/medium/BR.png"
		        width="90"
		        height="50"
		        className="d-inline-block align-top"
		        alt="React Bootstrap logo"
		      />
		    </Navbar.Brand>
		    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
		    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
			  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
			    <Nav className="mr-auto">
			     
			      <NavDropdown title="Menu" id="collasible-nav-dropdown" >
			        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
			        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
			        <NavDropdown.Divider />
			        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
			      </NavDropdown>
			    </Nav>
			    
			  </Navbar.Collapse>
		</Navbar>;
      </div>
    );
  }
}

export default Client;
