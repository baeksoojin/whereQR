import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BaseURL = 'http://127.0.0.1:8000/qrcode/';

const axiosInstance= axios.create({
	baseURL: BaseURL,
	timeout: 5000,
	headers: {
		'Authorization': "Token",
        'Content-Type': 'application/json',
        'accept': 'application/json'
	}, 
});

const SaveQR = () => {

    let navigate = useNavigate();
    let key = useParams().ID;
    console.log(key);

    const [memo, setMemo] = useState('No result');

    const onChangeMemo = (e) => {
        setMemo(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            key: key,
            text: memo
        };
        if(localStorage.getItem('token')){//로그인을 안 했다면, 로그인이 필요한 페이지라고 경고.
            let token = localStorage.getItem('token');
            axiosInstance.defaults.headers['Authorization'] = "Token " + token;
            axiosInstance.post('saveQR/',data); 
        }
        else{
            alert('login필요');
        }
    }
    
    return(
        <div className='saveQR'>
            <div>
            <label className="memo">memo</label><br/>
            <input className="memo" name="qr-memo" value={memo} required onChange={onChangeMemo} />
            </div>
            <div style={{marginTop:10}}>
                <button className = "button" type="primary" onClick={onSubmit}>등록하기</button>
            </div>
            <p>주소와 전화번호는 회원가입시 등록했던 정보로 표시됩니다.</p>
        </div>
        
        
    )
}

export default SaveQR;