import styled from 'styled-components';

export const Div = styled.div`
    
    width: 50%;
    height: 70%;
    padding: 50px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: black;
    box-shadow: 0 10px 25px -10px rgba(0,0,0,0.5);
    border-radius: 5px;

`;

export const Div2 = styled.div`
    
    width: 50%;
    height: 40%;
    padding: 50px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: black;
    box-shadow: 0 10px 25px -10px rgba(0,0,0,0.5);
    border-radius: 5px;

`;

export const SDiv = styled.div`
    width: 100%;
    height: 100vh;
    background:linear-gradient(to right top,black,#15cdfc);
    box-sizing: border-box;
    background-color : black;
    display: flex;
    justify-content: center;
    align-items: center;
    
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

export const Label = styled.label`
    width : 70%;
    color: #15cdfc;
    border-radius: 8px;
    font-size: 1.2rem;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    display: flex;
    justify-content: space-between;
    z-index: 10;
`;

export const Button = styled.button`
    margin: 50px 20px 0px 10px;
    background-color : black;
    color: #15cdfc;
    outline: none;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    text-decoration: none;
    /* Second Nav */
    margin-left: 24px;
    &:hover {
    transition: all 0.2s ease-in-out;
    background: #15cdfc;
    color: #010606;
    }
`;