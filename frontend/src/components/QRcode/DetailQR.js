import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import {QDiv, Label , Div, Input, Button,P,TH,TD} from "./QRcodeElements";

const Detail = () => {

    let navigate = useNavigate();
    let key = useParams().ID;
    console.log(key);

    const [address, setAdd] = useState('No result');
    const [memo, setMemo] = useState('No result');
    const [phonenum, setPhonenum] = useState('No result');
    const [title, setTitle] = useState('No result');

    const saveQR = (key) => {
        navigate(`/SaveQR/${key}`);
    }

    useEffect(()=>{ 
        axios.get('http://127.0.0.1:8000/qrcode/data/',{params: {"key" : key}})
        .then((response) => {

            console.log(response);
            
            if(Number(response.data['is_null'])===0){
                setTitle(response.data['title']);
                setAdd(response.data['address']);
                setMemo(response.data['memo']);
                setPhonenum(response.data['phonenumber']);
            }
            else{
                console.log("등록된 정보가 없습니다.");
                saveQR(key);
            }
            
        })
      },[memo]); 

    return(
        <QDiv>
            <tbody>
                <tr>
                    <TH>제목</TH>
                    <TD>{title}</TD>
                </tr>
                <tr>
                    <TH>메모</TH>
                    <TD>{memo}</TD>
                </tr>
                <tr>
                    <TH>주소</TH>
                    <TD>{address}</TD>
                </tr>
                <tr>
                    <TH>연락처</TH>
                    <TD>{phonenum}</TD>
                </tr>
            </tbody>
            
            
        </QDiv>

    )
}

export default Detail;