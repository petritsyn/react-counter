import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/counter/Counter";
import Settings from "./components/Settings/Settings";

function App() {

    let [value, setValue] = useState(0);
    let [maxValue, setMaxValue] = useState(0);
    let [startValue, setStartValue] = useState(0);
    let [enterValue, setEnterValue] = useState(false);
    let [disableSetButton, setDisableSetButton] = useState(false);

    let incorrectValue = false;

    const incHandler = () => {
        setValue(value + 1)
    }

    const resetHandler = () => {
        setValue(startValue)
    }

    const setHandler = () => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("startValue", JSON.stringify(startValue))
        setValue(startValue)
        setEnterValue(false)
        setDisableSetButton(true)
    }

    const onMaxValueChange = (maxInputValue: number) => {
        setMaxValue(maxInputValue)
        setEnterValue(true)
        setDisableSetButton(false)
    }

    const onStartValueChange = (startInputValue: number) => {
        setStartValue(startInputValue)
        setEnterValue(true)
        setDisableSetButton(false)
    }

    useEffect( () => {
        let startValueLS = localStorage.getItem("startValue");
        let maxValueLS = localStorage.getItem("maxValue")
        if (startValueLS) {
            let newStartValueLS = JSON.parse(startValueLS)
            setStartValue(newStartValueLS)
        }
        if (maxValueLS) {
            let newMaxValueLS = JSON.parse(maxValueLS)
            setMaxValue(newMaxValueLS)
        }
        setDisableSetButton(true)
    }, [])

    useEffect( () => {
        setValue(startValue)
    }, [startValue])

    if (startValue < 0 || maxValue < startValue || maxValue === startValue) {
        incorrectValue = true
    } else {
        incorrectValue = false
    }

    return (
        <div className="App">
            <Settings setHandler={setHandler}
                      onMaxValueChange={onMaxValueChange}
                      maxValue={maxValue}
                      onStartValueChange={onStartValueChange}
                      startValue={startValue}
                      value={value}
                      disableSetButton={disableSetButton}
            />
            <Counter value={value}
                     incHandler={incHandler}
                     resetHandler={resetHandler}
                     maxValue={maxValue}
                     incorrectValue={incorrectValue}
                     enterValue={enterValue}
                     />
        </div>
    );
}

export default App;
