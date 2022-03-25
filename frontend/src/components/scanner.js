import React, { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import axios from "axios";

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

const QRScan = () => {
  const [data, setData] = useState('No result');

  const getData = () => {

    axiosInstance.defaults.headers['Authorization'] = "Token " + "39d2e073a8652eec1a9107796de801e4327b23e3";
    axiosInstance.get('data/',{params: {"key" : "20220325052842365766"}})
      .then((response) => {console.log(response);})
    
  }

  useEffect(()=>{ 
    console.log('값이 바뀜');
    getData();
  },[data]);
   

  return (
    <div className='QRScan'>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
     <p>{data}</p>
    </div>
  );
};

export default QRScan;