import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/categories';
import { getSubCategories } from '../../store/subCategories';
import CategoryCard from './CategoryCard';
import './HomePage.css';


export default function HomePage() {
    const dispatch = useDispatch();
    const categories = useSelector((state) => Object.values(state.categories));

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getSubCategories());
    }, [ dispatch ])


    return (
        <div className="homePage_main_div">
            <h1>HomePage</h1>
            <div className="categoryCards_parent_div">
                {categories.map(category => <CategoryCard categoryId={category.id} key={category.id}/>)}
            </div>
        </div>
    )
}
