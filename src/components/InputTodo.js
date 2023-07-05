import React from 'react';
import { styled } from 'styled-components';
import { maxWidth, borderColor, mainColor } from '../styles/variables';
import inputAddButton from '../assets/images/inputAddButton.svg'

export const InputTodoContainer = styled.section`
    box-sizing: border-box;
    width: ${maxWidth};
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const InputTodoInput = styled.input`
    box-sizing: border-box;
    flex-grow: 1;
    height: 35px;
    margin: 0 10px 0 15px;
    padding: 0 10px 0 10px;
    border-radius: 15px;
    border-style: solid;
    border-color: ${borderColor};
    font-family: 'Poor Story', cursive;;
    font-size: 1rem;
    &:focus {
        outline-color: ${mainColor};
        border-color: ${mainColor};
    }
`;
export const InputTodoButton = styled.button`
    box-sizing: border-box;
    margin: 0 15px 0 0 ;
    border-style : none;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const InputTodoButtonImg = styled.img`
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    transition: 100ms;
    &:hover {
        opacity: 0.5;
    }
`;

export const InputTodo = () => {
    return (
        <InputTodoContainer>
            <InputTodoInput type='text' placeholder='새로운 할 일을 입력하세요'/>
            <InputTodoButton>
                <InputTodoButtonImg src={inputAddButton}/>
            </InputTodoButton>
        </InputTodoContainer>
    );
};