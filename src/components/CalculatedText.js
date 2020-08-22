import React from 'react'

 const CalculatedText = (props) => {
    const cls = 'font-weight-bold ' + `${props.classColor}`
    return (
        <div>
            <p className="text-left">{props.textDescription} <span className={cls}>{props.textResult}</span></p>
        </div>
    )
}

export default CalculatedText
