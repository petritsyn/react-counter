import React from 'react';
import s from "../Counter.module.css";
import style from './Display.module.css'

type PropsType = {
    value: number
    maxValue: number
    incorrectValue: boolean
    enterValues: boolean
}

const Display = (props: PropsType) => {
    if (props.incorrectValue) {
        return <div className={"screen" + ' ' + style.incorrectValue}>Incorrect value!</div>
    } else if (props.enterValues) {
        return <div className={"screen" + ' ' + style.enterValues}>Enter values and press 'set'</div>
    } else {
        return (
            <div className="screen">
                <span
                    className={props.value === props.maxValue && props.value !== 0 ? s.maxValue : ''}>{props.value}</span>
            </div>
        );
    }
};

export default Display;