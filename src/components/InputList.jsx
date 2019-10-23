import React from 'react';
import "./InputList.css"


const InputList = ({ value, onChange,onKeyPress }) => {
    return (
        <div>
            <input
            placeholder="NEW LIST"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            />
        </div>
    )
}

export default InputList






