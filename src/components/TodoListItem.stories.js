import React from 'react';
import { TodoListItem } from './TodoListItem';

export default {
    title: 'components/TodoListItem',
    component: TodoListItem,
    // argTypes: {
    //     title: { control: "text" }
    // }
}

const Template = () => <TodoListItem />

export const TodoListItemTemplate = Template.bind({});

// TodoListItemTemplate.args = {
//     title: "페이지 제목",
// }