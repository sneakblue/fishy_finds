// import { useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { getStoreItemsList } from '../../store/storeItems';
// import { updateCartItem } from '../../store/cart';
import CartItem from './CartItem';


export default function CartList({cartItemDetails}) {
    // const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);
    // console.log(cartItemDetails.length);

    // const removeItemHandler = (id) => {
    //     console.log(id)
    //     dispatch(updateCartItem(sessionUser, id, 0));
    // }

    return (
        <div className="cartList-main-container--div">
            {cartItemDetails.map((item) => <CartItem item={item} />)}
        </div>
    )
}
