import React, {Fragment} from 'react'

 const Button = (props) => {
    return (
        <Fragment>
            <button 
            type="button" 
            style={{margin: '0 auto'}} 
            className="btn btn-outline-success" 
            onClick={props.onClick}
            >Рассчитать</button>
        </Fragment>
    )
}

export default Button