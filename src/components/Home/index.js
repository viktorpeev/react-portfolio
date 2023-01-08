import LogoTitle from '../../assets/images/Logo-V.png';
import { Link } from 'react-router-dom';
import './index.scss';
import React, { useEffect } from 'react';
import { AnimatedLetters } from '../AnimatedLetters';
import { Logo } from './Logo';
import Loader from 'react-loaders';
export const Home = () => {

    const [letterClass, setLetterClass] = React.useState('text-animate');
    const nameArray = ['i', 'k', 't', 'o', 'r'];
    const jobArray = ['f', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];


    useEffect(()=>{
         setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000)
    },[])

    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={`${letterClass} _11`}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt='developer' />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={20}
                    />
                </h1>
            </div>
            <Logo/>
        </div>
        <Loader type='pacman'/>
        </>
    );
}
