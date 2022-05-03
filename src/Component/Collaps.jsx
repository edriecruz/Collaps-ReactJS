import React, { useState, useRef } from 'react';
import './Collaps.css';

export function Collaps(props) {
    const  [open, setOpen] = useState(false);

    const parentRef = useRef();
    if (parentRef.current)
    console.log(parentRef.current.scrollHeight);

    return (
        <div className='collaps ml-10 mt-10 flex flex-col items-center'>
          <button 
          className='toggle shadow-2xl p-6 w-52 rounded-xl bg-rose-100 transition delay-150 duration-300 ease-in-out hover:scale-110' 
          onClick={() => setOpen(!open)}>
            {props.label}
          </button>
          <div className='content-parent mt-3 rounded-lg' 
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