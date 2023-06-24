import React, { useEffect } from 'react'
import { useState } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useRouter } from 'next/router';

export default function Navbar({isHamburgerActive, setHamburgerActive} : {isHamburgerActive : boolean, setHamburgerActive : any}) {

    const [isSound, setIsSound] = useState<boolean>(false);
    const [audio] = useState(typeof Audio !== "undefined" && new Audio("./homepage-sound.mp3"));
    const router = useRouter();

    const toggleHamburger = () => {
        setHamburgerActive(!isHamburgerActive);
    }

    const playSound = () => {
        if (audio) {
            audio.play();
            setIsSound(true);
        }
    }

    const stopSound = () => {
        if (audio) {
            audio.pause();
            setIsSound(false);
        }
    }

    return (
        <nav className='z-20 sticky top-5 min-w-[400px] w-1/2 h-16 bg-[rgba(42,43,56,1)] shadow-lg  m-auto flex items-center justify-between rounded-lg px-6'>
            <h1 className='text-sm text-gray-200'>MERİÇ MERT BULCA</h1>
            <div className="sound-button absolute right-16">
                {isSound ? <button onClick={stopSound}><VolumeUpIcon htmlColor='#828894' /></button> : <button onClick={playSound}><VolumeOffIcon htmlColor='#828894' /></button>}
            </div>
            <div className="hamburger-box">
                <div onClick={toggleHamburger} className={`btn ${isHamburgerActive ? "active" : "not-active"}`}>
                    <span className='bg-gray-400 opacity-80'></span>
                    <span className='bg-gray-400 opacity-80'></span>
                    <span className='bg-gray-400 opacity-80'></span>
                </div>
            </div>
        </nav>
    )
}
