import React from 'react';

function Item(props) {
    return (
        <div className = 'item' onClick = {() =>props.handleScrollTo(props.name)}>
            <h2>{props.name}</h2>
        </div>
    )

}

export default Item;