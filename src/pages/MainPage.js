import React from 'react';
import { MainContainer, PageContainer } from '../components/PageContainer';
import { borderColor } from '../styles/variables';
import { TopBar } from '../components/TopBar';

const MainPage = () => {
    const color = {
        background: '#FFFFFF',
        border: borderColor
    }
    return (
        <PageContainer color={color}>
            <TopBar title='오늘 할 일'/>
            <MainContainer>This is MainPage</MainContainer>
        </PageContainer>
    );
};

export default MainPage;