import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {OnOff} from "./OnOff";




export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}
const callback = action('clicked on or off');
export const OnMode = () => <UncontrolledOnOff defaultOn ={true} onChange={callback} />;
export const OffMode = () => <UncontrolledOnOff  defaultOn ={false} onChange={callback} />;

