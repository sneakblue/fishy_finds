import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import { getCartItems } from '../../store/cart';
import './Navigation.css';

export default function Navigation({ isLoaded }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        if (isLoaded) {
            // console.log('Is loaded');
            dispatch(getCartItems(sessionUser));
        }
    }, [dispatch, sessionUser, isLoaded])

    // let sessionLinks;
    // if (sessionUser) {
    //     sessionLinks = (
    //         <ProfileButton user={sessionUser} />
    //     );
    // } else {
    //     sessionLinks = (

    //     );
    // }

    return (
        <div className='navbar-main--div'>
            <div>
                <i className='fas fa-bars navbar-category-menu--icon'/>
                <NavLink exact to="/" className='navbar-site--title'>Fishy Finds</NavLink>
            </div>
            <div className='navbar-login-cart--div'>
                <LoginFormModal />
                <i className='fas fa-shopping-cart navbar-shopping--icon'/>
            </div>
        </div>
    );
}
