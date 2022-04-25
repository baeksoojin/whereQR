import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {Div2, Label , SDiv, Input, Button} from "./AccountElements.js";
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
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const Login = (e) => {
        e.preventDefault();
     
        const user_data = {
            email: email,
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
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
    <SDiv className="signin">
        <Div2>
            <Label className="label" >이메일</Label>
            <Input className="user" name="user-id" value={email} required onChange={onChangeEmail} /><br/>
            <Label className="label" >비밀번호</Label>
            <Input className="user" name="user-password" type="password" value={password} required onChange={onChangePassword} /><br/>
            <div>
            <Button className="button" type="primary" onClick={Login}>로그인하기</Button>
            <Button className="button" type="primary" onClick={Homepage}>홈으로</Button>
            <Button className="button" type="primary" onClick={Signup}>회원가입</Button>
            </div>
        </Div2>
    </SDiv>
    );
    

}

export default Signin;