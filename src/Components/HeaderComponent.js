import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  
} from "reactstrap";

import { NavLink } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.opentoggler = this.opentoggler.bind(this);
  }

  opentoggler() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
    setTimeout(() =>{
      this.setState({isNavOpen:false})
    },2300)
  }
  render() {
    return (
      <React.Fragment>
        <Navbar expand="sm" dark fixed="top">
          <div className="container ">
            <NavbarToggler  onClick={this.opentoggler}></NavbarToggler>
            <NavbarBrand>
              <NavLink to="/home" className='ml-auto'>
                {" "}
                <img  src="images/Untitlede.png" height="60" width="230" alt='SpaceX'></img>
              </NavLink>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
         
              <Nav navbar>
                <NavItem>
                  <NavLink  className="nav-link text " to="/falcon9">
                   <span className='hstyle'> FALCON 9</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link text" to="/falheavy">
                  <span className='hstyle'> FALCON HEAVY</span> 
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/dragon" className="nav-link text">
                  <span className='hstyle'>DRAGON</span>  
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/star" className="nav-link text">
                  <span className='hstyle'>STARSHIP</span>  
                  </NavLink>
                </NavItem>
              </Nav>
         
            </Collapse>
            
          </div>
        </Navbar>

     
        
      </React.Fragment>
    );
  }
}
export default Header;
