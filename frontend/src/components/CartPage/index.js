import { useSelector } from 'react-redux';
import CartList from './CartList';

export default function CartPage() {
    const cartItems = useSelector((state) => Object.values(state.cart));

    let content;
    if (!cartItems.length) {
        content = (
            <>
                <p>Your shopping cart is empty. If you see something you would like to add to your shopping cart when shopping, click Add to Cart.</p>
            </>
        )
    } else {
        content = (
            <>
                <CartList currItems={cartItems}/>
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
