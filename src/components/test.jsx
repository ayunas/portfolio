import React from 'react';
import django from '@iconify/icons-logos/django';
import {Icon} from '@iconify/react';

const techStack = {django}

function Test(){
    // eval(`const sum = 4 + 3;  console.log(sum);`)
    
    return (
        <Icon icon={techStack.django}/>
    )
}

export default Test;

