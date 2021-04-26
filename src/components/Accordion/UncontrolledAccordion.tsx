import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./UncontrolledAccordionReducer";

type AccordionPropsType = {
    titleValue: string
}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log(("Accordion rendering"));
    // let [collapsed, setCollapsed] = useState(false)
     let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick = { () => {*/}
            {/*    setCollapsed(!collapsed)*/}
            {/*}} />*/}
            <AccordionTitle title={props.titleValue} onClick = { () => {
                dispatch({type: TOGGLE_COLLAPSED})
            }} />
            {/*<button onClick={(}>Toggel*/}
            {/*</button>*/}
            {!state.collapsed && <AccordionBody/>}
        </div>
    )


}


function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log(("AccordionBody rendering"));
    return (

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

