import { useSelector } from 'react-redux';
import CartList from './CartList';
import './CartPage.css';

export default function CartPage() {
    const cartItemCount = useSelector((state) => Object.values(state.cart.itemCount));
    const cartItemDetails = useSelector((state) => state.cart.currItemDetails);

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
    console.log(cartItemCount);
    return (
        <div>
            <div className='navbar-spacer'/>
            <h3>SHOPPING CART</h3>
            {content}
        </div>
    )
}
