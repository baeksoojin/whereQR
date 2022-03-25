import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const Detail = () => {

    let key = useParams().ID;
    console.log(key);

    const [address, setAdd] = useState('No result');
    const [memo, setMemo] = useState('No result');
    const [phonenum, setPhonenum] = useState('No result');

    useEffect(()=>{ 
        axios.get('http://127.0.0.1:8000/qrcode/data/',{params: {"key" : key}})
        .then((response) => {
            console.log(response);
            setAdd(response.data['address']);
            setMemo(response.data['memo']);
            setPhonenum(response.data['phonenumber']);
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