import React from 'react';
import Item from './item';

function VerticalMenu(props) {
    return (
        <div>
            <Item name = 'EXPERIENCE' {...props} />
            <Item name = 'EDUCATION' {...props} />
            <Item name = 'SKILLS' {...props} />
            <Item name = 'CONTACT' {...props} />
        </div>
    )
}

export default VerticalMenu;