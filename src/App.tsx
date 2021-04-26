import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(false);


    return (
        <div className={'App'}>
            {/*<OnOff on = {switchOn} onClick = {setSwitchOn} />*/}

            {/*<UncontrolledOnOff onChange = {setSwitchOn}/> {switchOn.toString()}*/}
            {/*<Rating value={ratingValue} onClick = {setRatingValue}/>*/}
            {/*<UncontrolledAccordion titleValue={"Uncontrolled menu"}/>*/}
            {/*<UncontrolledRating/>*/}

            {/*<Accordion titleValue={'Menu'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange = {() => {setAccordionCollapsed(!accordionCollapsed)}}*/}
            {/*            */}
            {/*/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}

        </div>
    );
}
type PageTitlePropsType = {
    title: string
}
function PageTitle(props:any) {
    console.log(("PageTitle rendering"));
    return (
        <h1>
            {props.title}
        </h1>
    )
}



export default App;
