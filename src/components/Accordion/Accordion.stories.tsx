import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";


export default {
    title: 'components/Accordion',
    component: Accordion,
}
const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was ckicked');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    onChange: callback,
    items: [],
    onClick: onClickCallback,
}

export const MenuUnCollapsedMode = Template.bind({});
MenuUnCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: false,
    onChange: callback,
    items: [
        {title: 'Lisa', value: 1},
        {title: 'Alla', value: 2},
        {title: 'Victor', value: 3},],
    onClick: onClickCallback,
}


export const MenuModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Menu'} collapsed={value} onChange={() => {
        setValue(!value)
    }} items={[
        {title: 'Lisa', value: 1},
        {title: 'Alla', value: 2},
        {title: 'Victor', value: 3},
    ]}
      onClick={(value) => {alert(`user with ID = ${value} should be free!`)}}/>
};