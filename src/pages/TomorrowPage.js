import React from 'react';
import { MainContainer, PageContainer } from '../components/PageContainer';
import { borderColor } from '../styles/variables';
import { TopBar } from '../components/TopBar'

const TomorrowPage = () => {
    const color = {
        background: '#FFFFFF',
        border: borderColor
    }
    return (
        <PageContainer color={color}>
            <TopBar title='내일 할 일'/>
            <MainContainer>This is TomorrowPage</MainContainer>
        </PageContainer>
    );
};

export default TomorrowPage;