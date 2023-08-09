import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import CategoryNavModal from './CategoryNavModal';
// import CartModal from '../CartModal';
import { getCartItems } from '../../store/cart';
import './Navigation.css';

export default function Navigation({ isLoaded }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const cart = useSelector(state => Object.values(state.cart));

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
    let cartCount = 0;
    if (cart) {
        cart.forEach((item) => {
            cartCount += Number(item.quantity);
        })
    }

    return (
        <div className='navbar-main--div'>
            <div className='navbar-category-title--div'>
                {/* <i className='fas fa-bars navbar-category-menu--icon'/> */}
                <CategoryNavModal />
                <NavLink exact to="/" className='navbar-site--title'>Fishy Finds</NavLink>
            </div>
            <div className='navbar-login-cart--div'>
                <LoginFormModal />
                <NavLink to="/cart" className='navbar-shopping-cart--link'>
                    <i className='fas fa-shopping-cart navbar-shopping--icon'>
                        <div className='cart_count'>{cartCount}</div>
                    </i>
                </NavLink>
                {/* <CartModal cartCount={cartCount}/> */}
            </div>
        </div>
    );
}
