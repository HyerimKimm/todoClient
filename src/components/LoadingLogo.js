import React from 'react';
import { styled } from 'styled-components';
import logo from '../assets/images/loadiingLogo.svg'

export const LoadingLogoContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const LoadingLogoImg = styled.img`
    width: 60px;
    height: 60px;
`
export const LoadingLogoText = styled.h1`
    color: white;
    font-size: 2rem;
    font-family: 'Poor Story', cursive;
    font-weight: lighter;
`;
export const LoadingLogo = () => {
    return (
        <LoadingLogoContainer>
            <LoadingLogoImg src={logo} alt="달력모양 아이콘"/>
            <LoadingLogoText>열심히 살자</LoadingLogoText>
        </LoadingLogoContainer>
    );
};
