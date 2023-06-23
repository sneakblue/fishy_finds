import { Link } from 'react-router-dom';

export default function ItemCard({item}) {


    return (
        <div className="subCategory-item-card--div" key={item.id}>
            <div className='subCategory-item-card-img--div'>
                <Link to={`/item/${item.id}`}>
                    <img src={item.imageUrl} className="subCategory-item-card--img"/>
                </Link>
            </div>
            <div className="subCategory-item-card-details--div">
                <div className="subCategory-item-card-name--div">
                    <Link to={`/item/${item.id}`}>
                        <p className='subCategory-item-card-name--p'>{item.name}</p>
                    </Link>
                </div>
                <div>
                    <p className='subCategory-item-card-price--p'>{`$${item.price}`}</p>
                </div>
            </div>
        </div>
    )
}
