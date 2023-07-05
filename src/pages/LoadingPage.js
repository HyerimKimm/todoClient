import React from 'react';
import { borderColor, mainColor } from '../styles/variables';
import { PageContainer } from '../components/PageContainer';
import { LoadingLogo } from '../components/LoadingLogo';
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
    const color = { background:mainColor, border:borderColor };
    const navigate = useNavigate();

    const goToMain = async () => {
        setTimeout(()=>{
            navigate('/today')
        },2000);
    }
    goToMain();

    return (
       <PageContainer color={color}>
            <LoadingLogo/>
       </PageContainer>
    );
};

export default LoadingPage;