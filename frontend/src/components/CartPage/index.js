import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CartList from './CartList';
import { getCartItems } from '../../store/cart';
import './CartPage.css';

export default function CartPage() {
    const dispatch = useDispatch();
    const cartItemCount = useSelector((state) => Object.values(state.cart.itemCount));
    const cartItemDetails = useSelector((state) => state.cart.currItemDetails);
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getCartItems(sessionUser));
    }, [dispatch, sessionUser])

    let content;
    if (!cartItemCount.length) {
        content = (
            <>
                <p>Your shopping cart is empty. If you see something you would like to add to your shopping cart when shopping, click Add to Cart.</p>
            </>
        )
    } else {
        content = (
            <>
                <CartList cartItemCount={cartItemCount} cartItemDetails={cartItemDetails} />
            </>
        )
    }
    // console.log(cartItemCount);
    return (
        <div>
            <div className='navbar-spacer'/>
            <h3>SHOPPING CART</h3>
            {content}
        </div>
    )
}
