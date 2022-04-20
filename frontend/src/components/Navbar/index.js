import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Button
  } from './NavbarElements';
import {Logout} from '../Account/logout';

const Navbar = () => {
    return(
        <Nav>
            <NavLink to = "/">
                <h1>logo</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to = '/Signup' activeStyle>
                    Signup
                </NavLink>
                <NavLink to = '/Scan' activeStyle>
                    Scan
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                <Button onClick={Logout}>Logout</Button>
            </NavBtn>
        </Nav>
    )
}
export default Navbar