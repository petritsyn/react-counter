import React from 'react';
import s from './Button.module.css'

type PropsType = {
    name: string
    onClick: () => void
    disabled?: boolean
}

const Button = (props: PropsType) => {

    const onClickHanler = () => {
        props.onClick()
    }

    return (
        <div>
            <button className={s.button} onClick={onClickHanler} disabled={props.disabled}>{props.name}</button>
        </div>
    );
};

export default Button;