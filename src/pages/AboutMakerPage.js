import React from 'react';
import { MainContainer, PageContainer } from '../components/PageContainer';
import { borderColor } from '../styles/variables';
import { TopBar } from '../components/TopBar';

const AboutMakerPage = () => {
    const color = {
        background: '#FFFFFF',
        border: borderColor
    }

    return (
        <PageContainer color={color}>
            <TopBar title='이 앱 만든 사람'/>
            <MainContainer>This is AboutMakerPage</MainContainer>
        </PageContainer>
    );
};

export default AboutMakerPage;