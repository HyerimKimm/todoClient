import React from 'react';
import { TodoList } from './TodoList';

export default {
    title: 'components/TodoList',
    component: TodoList,
    // argTypes: {
    //     title: { control: "text" }
    // }
}

const Template = () => <TodoList />

export const TodoListTemplate = Template.bind({});

// TodoListTemplate.args = {
//     title: "페이지 제목",
// }