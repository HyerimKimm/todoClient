import styled from 'styled-components';

export const PageContainer = styled.main`
    box-sizing: border-box;
    background-color: ${(props)=>props.color};
    width: 360px;
    height: 700px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`