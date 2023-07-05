import React from 'react';
import { styled } from 'styled-components';
import barLogo from '../assets/images/barLogo.svg'
import barButtonMenu from '../assets/images/barButtonMenu.svg'
import { maxWidth } from '../styles/variables';

export const HeaderContainer = styled.header`
    box-sizing: border-box;
    position: fixed;
    top:30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: ${maxWidth};
    height: 60px;
    padding: 10px;
    box-shadow: 0px 4px 4px 0px #E1E9E3;
`
export const HeaderLogoImg = styled.img`
    width: 30px;
    height: 30px;
    margin: 10px 10px 10px 20px;
`;
export const HeaderTitle = styled.h2`
    font-family: 'Poor Story', cursive;
    font-weight: lighter;
    font-size: 1rem;
    flex-grow: 1;
`
export const HeaderMenuButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-style: none;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
`
export const TopBar = ({title}) => {
    return (
        <HeaderContainer>
            <HeaderLogoImg src={barLogo} alt='작은 달력모양 로고'/>
            <HeaderTitle>{title}</HeaderTitle>
            <HeaderMenuButton><HeaderLogoImg src={barButtonMenu}/></HeaderMenuButton>
        </HeaderContainer>
    );
};