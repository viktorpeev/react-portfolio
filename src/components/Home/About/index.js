import './index.scss';
import { AnimatedLetters } from '../../AnimatedLetters';
import React from 'react';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Loader} from 'react-loaders'
export const About = () => {
    const [letterClass, setLetterClass] = React.useState('text-animate');

    React.useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <>
        
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p align="LEFT">
                    I'm quiet confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family
                    person, father of a beautiful daughter, a sports fanatic,
                    photography enthusiast, and tech-obsessed!!!
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon color='#DD0031' icon={faAngular} />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon color='#F06529' icon={faHtml5} />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon color='#28A4D9' icon={faCss3} />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon color='#5ED4F4' icon={faReact} />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon color='#EFD81D' icon={faJsSquare} />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon color='#EC4D28' icon={faGitAlt} />
                    </div>
                </div>
            </div>

        </div>
        <Loader type='pacman'/>
        </>
    );
}