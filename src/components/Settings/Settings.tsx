import React, {ChangeEvent} from 'react';
import '../../App.css'
import s from './Settings.module.css'
import Button from "../Button/Button";

type PropsType = {
    setHandler: () => void
    onMaxValueChange: (maxInputValue: number) => void
    maxValue: number
    onStartValueChange: (onStartValue: number) => void
    startValue: number
    value: number
    disableSetButton: boolean
    incorrectValue: boolean
}

const Settings = (props: PropsType) => {

    const onMaxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onMaxValueChange(Number(e.currentTarget.value))
    }

    const onStartValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onStartValueChange(Number(e.currentTarget.value))
    }

    const inputMaxValueError = () => {
        if (props.maxValue < 0 || props.maxValue < props.startValue) {
            return s.inputError
        } else if (props.maxValue > 0 && props.maxValue === props.startValue) {
            return s.inputError
        }
        return ''
    }

    const inputStartValueError = () => {
        if (props.startValue < 0 || props.startValue > props.maxValue) {
            return s.inputError
        } else if (props.maxValue > 0 && props.maxValue === props.startValue) {
            return s.inputError
        }
        return ''
    }

    return (
        <div className="counter">
            <div className="screen">
                <div className={s.settingsField}>
                    <div>
                        <span>max value: </span>
                        <input type={"number"} onChange={onMaxValueChangeHandler} value={props.maxValue}  className={inputMaxValueError()}/>
                    </div>
                    <div>
                        <span>start value: </span>
                        <input type={"number"} onChange={onStartValueChangeHandler} value={props.startValue} className={inputStartValueError()}/>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <Button name="set" onClick={props.setHandler} disabled={props.disableSetButton || props.incorrectValue}/>
            </div>
        </div>
    );
};

export default Settings;