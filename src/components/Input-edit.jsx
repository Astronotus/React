import React from 'react';
import "./Input-edit.css"


const InputEdit = ({ value, onChange,onKeyPress,display }) => {
    return (
        <div>
            <input
        
            placeholder="edit"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            />
        </div>

    )
}

export default InputEdit






