import React from 'react';
import { MainContainer, PageContainer } from '../components/PageContainer';
import { borderColor } from '../styles/variables';
import { TopBar } from '../components/TopBar'
import { InputTodo } from '../components/InputTodo';
import { TodoList } from '../components/TodoList';

const TomorrowPage = ({todo, setTodo}) => {
    const color = {
        background: '#FFFFFF',
        border: borderColor
    }
    return (
        <PageContainer color={color}>
            <TopBar title='내일 할 일'/>
            <MainContainer>
                <InputTodo setTodo={setTodo}/>
                <TodoList todo={todo}/>
            </MainContainer>
        </PageContainer>
    );
};

export default TomorrowPage;