import React from 'react';
import { borderColor, mainColor } from '../styles/variables';
import { PageContainer } from '../components/PageContainer';
import { LoadingLogo } from '../components/LoadingLogo';

const LoadingPage = () => {
    const color = { background:mainColor, border:borderColor };

    return (
       <PageContainer color={color}>
            <LoadingLogo/>
       </PageContainer>
    );
};

export default LoadingPage;