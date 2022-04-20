import React, { useState, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const QRScan = () => {

  let navigate = useNavigate();
  const [data, setData] = useState('No result');
  
  const getData = (data) => {
    if(data!='No result'){
      console.log(data);
      navigate(`/scan/${data}`);
    } 
  }

  useEffect(()=>{ 
    console.log('값이 바뀜');
    getData(data);
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