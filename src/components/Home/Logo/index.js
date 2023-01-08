import './index.scss';
import LogoV from '../../../assets/images/Logo-V.png'
import React, { useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import { Link } from 'react-router-dom';

export const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    React.useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin);

        gsap.timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1
            })
            .from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 20,
            })
    }, []);
    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoV} alt='V' />
            <h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </h2>
        </div>
    );
}