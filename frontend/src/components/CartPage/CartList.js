import CartItem from './CartItem';


export default function CartList({cartItemDetails}) {

    return (
        <div className="cartList-main-container--div">
            {cartItemDetails.map((item) => <CartItem item={item} key={item.id} />)}
        </div>
    )
}
