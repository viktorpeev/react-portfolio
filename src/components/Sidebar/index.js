import './index.scss'
import { Link } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

export const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo'/>
                <img className='sub-logo' src={LogoSubtitle} />
            </Link>
        </div>
    );
}