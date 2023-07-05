import styled, { keyframes } from 'styled-components';
import { maxWidth } from '../styles/variables';

export const fadeInAnimation = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`
export const PageContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    background-color: ${(props)=>props.color.background};
    border-style: solid;
    border-color: ${(props)=>props.color.border};
    width: ${maxWidth};
    height: 700px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${fadeInAnimation} 300ms;
`
export const MainContainer = styled.main`
    box-sizing: border-box;
    position: fixed;
    top: 90px;
    width: ${maxWidth};
    height: 620px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;
export const ListContainer = styled.ul`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: ${maxWidth};
    height: 560px;
    display: flex;
    flex-direction: column;
`