import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CartList from './CartList';
import { getCartItems } from '../../store/cart';
import './CartPage.css';

export default function CartPage() {
    const dispatch = useDispatch();
    const cartItemDetails = useSelector((state) => Object.values(state.cart));
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getCartItems(sessionUser));
    }, [dispatch, sessionUser])

    let content;
    if (!cartItemDetails.length) {
        content = (
            <>
                <p>Your shopping cart is empty. If you see something you would like to add to your shopping cart when shopping, click Add to Cart.</p>
            </>
        )
    } else {
        content = (
            <>
                <CartList cartItemDetails={cartItemDetails} />
            </>
        )
    }

    return (
        <div>
            <div className='navbar-spacer'/>
            <h3>SHOPPING CART</h3>
            {content}
        </div>
    )
}
