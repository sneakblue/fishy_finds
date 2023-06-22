import { Link } from 'react-router-dom';

export default function ItemCard({item}) {


    return (
        <div className="subCategory-item-card--div" key={item.id}>
            <img src={item.imageUrl} className="subCategory-item-card--img"/>
            <div className="subCategory-item-card-details--div">
                <div className="subCategory-item-card-name--div">
                    <p>{item.name}</p>
                </div>
                <div>
                    <p>{`$${item.price}`}</p>
                </div>
            </div>
        </div>
    )
}
