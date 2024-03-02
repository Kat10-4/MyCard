import styled from "styled-components";

export const Button = styled.button`
    width: 86px;
    height: 30px;
    box-sizing: border-box;
    border: 2px solid rgb(78, 113, 254);
    border-radius: 5px;
    color: rgb(78, 113, 254);
    font-family: Inter;
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    background-color: rgb(255,255,255);
&:hover{
    cursor: pointer;
    background-color:rgb(78, 113, 254) ;
    color: rgb(255,255,255)
}
`