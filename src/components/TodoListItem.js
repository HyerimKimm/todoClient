import React from 'react';
import { styled } from 'styled-components';
import { maxWidth, redButtonColor, redButtonHoverColor } from '../styles/variables';

export const ItemContainer = styled.li`
    list-style: none;
    box-sizing: border-box;
    padding: 0 20px 0 20px;
    width: ${maxWidth};
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #CDCDCD;
`
export const ItemCheckbox = styled.button`
    width: 30px;
    height: 30px;
    margin-right: 15px;;
    border-style: none;
    cursor: pointer;
`
export const ItemTitle = styled.p`
    font-family: 'Poor Story', cursive;
    font-weight: lighter;
    flex-grow: 1;
`
export const ItemDeleteButton = styled.button`
    border-style: none;
    border-radius: 20px;
    width: 60px;
    height: 30px;
    background-color: ${redButtonColor};
    color: white;
    &:hover {
        background-color: ${redButtonHoverColor};
        cursor: pointer;
    }
    transition: 300ms;
`

export const TodoListItem = ({item}) => {
    return (
        <ItemContainer>
            <ItemCheckbox/>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemDeleteButton>삭제</ItemDeleteButton>
        </ItemContainer>
    );
};