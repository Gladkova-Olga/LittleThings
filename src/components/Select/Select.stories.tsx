import React, {useMemo, useState} from "react";
import {ItemType, Select} from "./Select";


export default {
    title: 'Select',
    component: Select,
}

export const WithValue = () => {
    const [value1, setValue1] = useState('1');
    const [value2, setValue2] = useState('1');
    const [value3, setValue3] = useState('2');
    const [counter, setCounter] = useState(0);
    console.log('Help to ReactMemo');

    const [cities, setCities] = useState<Array<ItemType>>([
        {value: "1", title: 'Minsk', countryID: 1, peopleBL: 2},
        {value: "2", title: 'New-York', countryID: 5, peopleBL: 8},
        {value: "3", title: 'London', countryID: 4, peopleBL: 10},
        {value: "4", title: 'Vilnius', countryID: 2, peopleBL: 0.5},
        {value: "5", title: 'Moscow', countryID: 6, peopleBL: 12},
    ]);

    const newCities1 = useMemo(() => {
        return cities.filter(c => c.countryID === 1)
    }, [cities])

    const newCities2 = useMemo(() => {
        return cities.filter(c => c.title.toLowerCase().indexOf('m') > -1)
    }, [cities])
    const newCities3 = useMemo(() => {
        return cities.filter(c => c.peopleBL >= 10)
    }, [cities])


    return <>
        CountryID = 1: <Select value={value1} onChange={setValue1}
                               items={newCities1}/>
        With m: <Select value={value2} onChange={setValue2}
                        items={newCities2}/>
        More than 10 people: <Select value={value3} onChange={setValue3}
                                     items={newCities3}/>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>


}
export const WithoutValue = () => {
    const [value, setValue] = useState(null);
    return <>
        <Select
            onChange={setValue}
            value={value}
            items={[
                {value: "1", title: 'Minsk', countryID: 1, peopleBL: 2},
                {value: "2", title: 'New-York', countryID: 5, peopleBL: 8},
                {value: "3", title: 'London', countryID: 4, peopleBL: 10},
            ]}/>
    </>
}