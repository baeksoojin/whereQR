import styled from 'styled-components';
import { Link as Link } from 'react-router-dom';

export const Div = styled.div`
    
    width: 50%;
    height: 70%;
    padding: 50px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #1795ac;
    box-shadow: 0 10px 25px -10px rgba(0,0,0,0.5);
    border-radius: 5px;

`;

export const Div2 = styled.div`
    
    width: 50%;
    height: 70%;
    padding: 50px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 70px 20px 80px 20px rgba(0,0,0,0.5);
    border-radius: 5px;

`;


export const QDiv = styled.div`
    width: 100%;
    height: 100vh;
    background:linear-gradient(to right top,black,#15cdfc);
    box-sizing: border-box;
    background-color : black;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;


export const Label = styled.label`
    width : 70%;
    color: #15cdfc;
    border-radius: 8px;
    font-size: 1.7rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    display: flex;
    justify-content: space-between;
    z-index: 10;
`;

export const Input = styled.input`
    width : 70%;
    border: 1px solid;
    border-radius: 8px;
    line-height: 2rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    display: flex;
    justify-content: space-between;
    z-index: 10;
`;

export const Button = styled.button`
    font-size: 1.2rem;
    margin: 50px 50px 0px 10px;
    background-color:transparent;
    color: black;
    outline: none;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    text-decoration: none;
    box-shadow: 0px 15px 20px #156295;

`;
export const P = styled.p`
    font-size: 0.9rem;
    color: #15cdfc;
    outline: none;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    text-decoration: none;
`;

export const TD = styled.td`
    width: 350px;
    padding: 10px;
    vertical-align: top;
    border-bottom: 1px solid;
`;

export const TH = styled.th`
    color: black;
    width: 150px;
    padding: 15px;
    font-weight: bold;
    vertical-align: top;
`;