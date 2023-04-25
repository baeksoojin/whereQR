import React, { useState, useEffect } from 'react';
import axios from "axios";

const BaseURL = 'http://127.0.0.1:8080/user/';

const axiosInstance= axios.create({
	baseURL: BaseURL,
	timeout: 5000,
	headers: {
		'Authorization': "Token",
        'Content-Type': 'application/json',
        'accept': 'application/json'
	}, 
});

export const Logout = () => {
    //logout api에 token을 넘겨줘야함.
    const token = localStorage.getItem('token')
    console.log(token);
    axiosInstance.defaults.headers['Authorization'] = "Token " + token;
    axiosInstance.post('logout/',localStorage.getItem('token')).then((res)=>{
        console.log(res);
        localStorage.removeItem('token');
    });
}