import './index.scss';
import LogoV from '../../../assets/images/Logo-V.png'
import { Link } from 'react-router-dom';

export const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoV} alt='V' />
            <h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </h2>
        </div>
    );
}