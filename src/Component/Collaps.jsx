import React, { useState, useRef } from 'react';
import './Collaps.css';

export function Collaps(props) {
    const  [open, setOpen] = useState(false);

    const parentRef = useRef();
    if (parentRef.current)
    console.log(parentRef.current.scrollHeight);

    return (
        <div className='collaps ml-10 mt-10'>
          <button 
          className='toggle shadow-2xl p-6 w-52 rounded-t-md' 
          onClick={() => setOpen(!open)}>
            {props.label}
          </button>
          <div className='content-parent' 
          ref={parentRef} 
          style={
            open 
            ? {
            height: parentRef.current.scrollHeight + "px",
            } : {
              height: "0px",
            }
        }>
            <div className='content'>{props.children}</div>
          </div>
        </div>
    );
  }