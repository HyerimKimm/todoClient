import React from 'react';
import { MainContainer, PageContainer } from '../components/PageContainer';
import { borderColor } from '../styles/variables';
import { TopBar } from '../components/TopBar';
import { InputTodo } from '../components/InputTodo';
import { TodoList } from '../components/TodoList';

const MainPage = ({todo, setTodo}) => {
    const color = {
        background: '#FFFFFF',
        border: borderColor
    }
    return (
        <PageContainer color={color}>
            <TopBar title='오늘 할 일'/>
            <MainContainer>
                <InputTodo setTodo={setTodo}/>
                <TodoList todo={todo} setTodo={setTodo}/>
            </MainContainer>
        </PageContainer>
    );
};

export default MainPage;