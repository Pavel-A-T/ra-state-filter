import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../main.css';

function ProjectList({projects}) {
    const elements = projects.map(item=><img key={uuidv4()} src={item.img}/>);
    return (
        elements
        );
}

export default ProjectList;
