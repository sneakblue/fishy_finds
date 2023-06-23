import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

export default function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <div>
                <LoginFormModal />
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
        );
    }

    return (
        <div className='navbar-main--div'>
            <div>
                <i className='fas fa-bars navbar-category-menu--icon'/>
                <NavLink exact to="/" className='navbar-site--title'>Fishy Finds</NavLink>
            </div>
            {isLoaded && sessionLinks}
        </div>
    );
}
