import React from 'react';
import { Collaps } from './Collaps';
import deadrose from '../assets/deadrose.jpg'

export function Content(){

return(
    <div className='relative flex flex-col md:flex-row justify-around h-screen w-screen'
    style={{background: 'url('+ deadrose +')', backgroundPositionY: '-25rem'}}>
        <Collaps label="Hello" className=''>
        <div className=' bg-slate-200 w-60 flex justify-center p-3 shadow-2xl transition delay-150 duration-300 ease-in-out'>
            I'm Edrie Cruz, living in Taytay, Rizal and I'm studying Information and Communication Technology aiming to be a Software Developer where I can improve myself through coding and programming and hone my skills through experience.
        </div>
    </Collaps>

    <Collaps label="Achievements" className=''>
        <div className=' bg-slate-200 w-60 flex justify-center p-3 shadow-2xl transition delay-150 duration-300 ease-in-out'>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        </div>
    </Collaps>

    <Collaps label="Hobbies" className=''>
        <div className=' bg-slate-200 w-60 flex flex-col space-y-5 justify-center p-3 transition delay-150 duration-300 ease-in-out'>
            <h1>~ Work Out 💪🏼</h1>
            <h1>~ Playing Games 🕹</h1>
            <h1>~ Coding Stuff 💻</h1>
            <p>etc.</p>
        </div>
    </Collaps>
    
    </div>
);
}