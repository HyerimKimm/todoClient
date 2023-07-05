import React from 'react';
import { InputTodo } from './InputTodo';

export default {
    title: 'components/InputTodo',
    component: InputTodo,
    // argTypes: {
    //     title: { control: "text" }
    // }
}

const Template = () => <InputTodo />

export const InputTodoTemplate = Template.bind({});

// InputTodoTemplate.args = {
//     title: "페이지 제목",
// }