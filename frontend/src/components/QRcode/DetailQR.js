import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

const Detail = () => {

    let navigate = useNavigate();
    let key = useParams().ID;
    console.log(key);

    const [address, setAdd] = useState('No result');
    const [memo, setMemo] = useState('No result');
    const [phonenum, setPhonenum] = useState('No result');

    const saveQR = (key) => {
        navigate(`/SaveQR/${key}`);
    }

    useEffect(()=>{ 
        axios.get('http://127.0.0.1:8000/qrcode/data/',{params: {"key" : key}})
        .then((response) => {

            console.log(response);
            
            if(Number(response.data['is_null'])===0){
                console.log('here');
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
        <div>
            <p>{address}</p>
            <p>{memo}</p>
            <p>{phonenum}</p>
        </div>

    )
}

export default Detail;