import { useDispatch, useSelector } from "react-redux";
import { updateCartItem } from "../../store/cart";

export default function CartItem ({item}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const removeItemHandler = (id) => {
        console.log(id)
        dispatch(updateCartItem(sessionUser, id, 0));
    }

    return (
        <div className="cartList-item-container--div">
            <div className="carList-item-img-title--div">
                <img
                    className='cartPage-item--img'
                    src={item?.imageUrl}
                    alt='product'
                />
                <div>
                    <h5>{item.name}</h5>
                    <button onClick={() => removeItemHandler(item.id)}>Remove</button>
                </div>
                <div>
                    <h4>Quantity: {item.quantity}</h4>
                    <input

                    />
                </div>
            </div>
        </div>
    )
}
