import React, { useEffect, useState } from 'react';
import './Comment.css'

const Comments = (props) => {
    const {name,body}=props.comment

    return (
        <div className='main-com'>
            
            <p className='cName'>{name}: </p>
            <p className='cBody'>{body}</p>
            <br></br>
            <br></br>
            <br></br>

            
        </div>
    );
};

export default Comments;