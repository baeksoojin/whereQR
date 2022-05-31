import React from "react";
import { useState, useEffect } from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Button
  } from './NavbarElements';
import axios from "axios";


const BaseURL = 'http://127.0.0.1:8000/user/';

const axiosInstance= axios.create({
	baseURL: BaseURL,
	timeout: 5000,
	headers: {
		'Authorization': "Token ",
        'Content-Type': 'application/json',
        'accept': 'application/json'
	}, 
});

const Navbar = () => {

    const [user, setUser] = useState({});
    const [name, setName] = useState('');

    useEffect(() => {
            setInterval(() => {
                const token = localStorage.getItem("token");
                setUser(token);
                }, [])
    }, 5000);
    
    const Logout = () => {
        console.log(localStorage.getItem("token"));
        axiosInstance.defaults.headers['Authorization'] = "Token " + user;
        axiosInstance.post('logout/').then(()=>{
            console.log('logout을 진행');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            axiosInstance.defaults.headers['Authorization'] = null;
        });
        
    }
    if (!user) {
        return(
            <Nav>
                <NavLink to = "/">
                    <h1>whereQR</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to = '/Signup' activeStyle>
                        Signup
                    </NavLink>
                    <NavLink to = '/Scan' activeStyle>
                        Scan
                    </NavLink>
                    <NavLink to = '/UserQr' activeStyle>
                        Mine
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        )
    }
    else{
        return(
            <Nav>
                <NavLink to = "/">
                    <h1>whereQR</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to = '/Signup' activeStyle>
                        Signup
                    </NavLink>
                    <NavLink to = '/Scan' activeStyle>
                        Scan
                    </NavLink>
                    <NavLink to = '/UserQr' activeStyle>
                        Mine
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <Button onClick={Logout}>Logout</Button>
                </NavBtn>
            </Nav>
        )
        }
}
export default Navbar