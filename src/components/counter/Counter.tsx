import React from 'react';
import '../../App.css'
import Button from "../Button/Button";
import Display from "./Display/Display";

type PropsType = {
    value: number
    incHandler: () => void
    resetHandler: () => void
    maxValue: number
    incorrectValue: boolean
    enterValue: boolean
}

const Counter = (props: PropsType) => {

    const disabledInc = () => {
        if (props.value === props.maxValue || props.value > props.maxValue || props.incorrectValue || props.enterValue) {
            return true
        }
        return false
    }

    const disabledReset = () => {
        if (props.incorrectValue || props.enterValue) {
            return true
        }
        return false
    }

    return (
        <div className="counter">
            <Display value={props.value} maxValue={props.maxValue} incorrectValue={props.incorrectValue} enterValues={props.enterValue}/>
            <div className="buttons">
                <Button name="inc" onClick={props.incHandler} disabled={disabledInc()}/>
                <Button name="reset" onClick={props.resetHandler} disabled={disabledReset()}/>
            </div>
        </div>
    );
};

export default Counter;