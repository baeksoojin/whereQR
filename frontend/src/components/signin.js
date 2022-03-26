import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
axios.defaults.withCredentials = true;

const BaseURL = 'http://127.0.0.1:8000/user/';

const axiosInstance= axios.create({
	baseURL: BaseURL,
	timeout: 5000,
	headers: {
		'Authorization': "Token",
        'Content-Type': 'application/json',
        'accept': 'application/json'
	}, 
});

const Signin = () => {

    let navigate = useNavigate();

    const Homepage = () => {
        navigate(`/`);
    };
    const Signup = () => {
        navigate(`/Signup`);
    }
    
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    const Login = (e) => {
        e.preventDefault();
     
        const user_data = {
            name: name,
            password: password,
        };

        axiosInstance.post('login/',user_data).then((res)=>{
            const token = res.data.token;
            axiosInstance.defaults.headers['Authorization'] = "Token " + token;
            localStorage.setItem('token',token); 
            console.log(token);
        });
        
    };


    const onChangeEmail = (e) => {
        setName(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
    <div className="signin">
        <div>
            <label className="label" >name</label><br/>
            <input className="user" name="user-id" value={name} required onChange={onChangeEmail} />
        </div><br/>
        <div>
            <label className="label" >password</label><br/>
            <input className="user" name="user-password" type="password" value={password} required onChange={onChangePassword} />
        </div><br/>
        
        <div style={{marginTop:10}}>
            <button className="button" type="primary" onClick={Login}>로그인하기</button>
            <button className="button" type="primary" onClick={Homepage}>홈으로</button>
            <button className="button" type="primary" onClick={Signup}>회원가입</button>
        </div>
    </div>
    );
    

}

export default Signin;