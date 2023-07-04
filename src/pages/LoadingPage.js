import React from 'react';
import { mainColor } from '../styles/variables';
import styled from 'styled-components';
import { PageContainer } from '../components/PageContainer';

const LoadingLogoContainer = styled.section``
const LoadingPage = () => {
    console.log(mainColor)
    return (
       <PageContainer color={mainColor}></PageContainer>
    );
};

export default LoadingPage;