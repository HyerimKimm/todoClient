import React from 'react';
import { TopBar } from './TopBar';

export default {
    title: 'components/TopBar',
    component: TopBar,
    argTypes: {
        title: { control: "text" }
    }
}

const Template = (args) => <TopBar {...args}/>

export const TopBarTemplate = Template.bind({});

TopBarTemplate.args = {
    title: "페이지 제목",
}