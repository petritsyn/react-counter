import React, {useState} from 'react';
import s from './Counter.module.css'

const Counter = () => {
    let [value, setValue] = useState(0);

    const incHandler = () => {
        setValue(value + 1)
    }

    const resetHandler = () => {
        setValue(0)
    }

    return (
        <div className={s.counter}>
            <div className={s.value}>
                <span className={value === 5 ? s.maxValue : ''}>{value}</span>
            </div>
            <div className={s.buttons}>
                <button onClick={incHandler} disabled={value === 5}>inc</button>
                <button onClick={resetHandler} disabled={!value}>reset</button>
            </div>
        </div>
    );
};

export default Counter;