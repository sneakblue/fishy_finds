import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getStoreItemsList } from '../../store/storeItems';
import CartList from './CartList';

export default function CartPage() {
    // const isLoaded = useRef(false);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => Object.values(state.cart));

    // useEffect(() => {
    //     if (cartItems.length) {
    //         const ids = [];
    //         cartItems.forEach((item) => ids.push(item.item_id));
    //         dispatch(getStoreItemsList(ids));
    //         console.log('Monkey');
    //         // isLoaded.current = true;
    //     }
    // }, [ dispatch, cartItems ]);
    // console.log(cartItems);

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
