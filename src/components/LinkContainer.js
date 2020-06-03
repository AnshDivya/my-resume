import React from 'react'

function LinkContainer(props) {
    return (
        <div className = {props.class}>
            {props.children}
        </div>
    )
}

export default LinkContainer;