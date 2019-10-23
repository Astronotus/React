import React from 'react';
import "./InputTaskEdit.css"



const InputEdit = ({ value, onChange,onKeyPress,onLoad }) => {
    return (
        <div >
            <input
            className={onLoad()?"go":"stop"}
            placeholder="edit"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            />
        </div>

    )
}

export default InputEdit






