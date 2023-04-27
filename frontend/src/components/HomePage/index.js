import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/categories';
import CategoryCard from './CategoryCard';
import './HomePage.css';

const categories = [
    'Fishing Reels',
    'Lures',
    'Fishing Accessories',
    'Rod & Reel Combos',
    'Rods',
    'Ice Fishing',
    'Kayaks & Canoes',
    'Fishing Line, Hooks & Weights',
    'Tackle Boxes & Bags',
    'Saltwater Fishing',
    'Fly Fishing',
    'Fishing Apparel',
    'Fishing Sunglasses',
    'Bowfishing'
]


export default function HomePage() {
    const dispatch = useDispatch();

    const categories = useSelector((state) => Object.values(state.categories));

    useEffect(() => {
        dispatch(getCategories());
    }, [])


    return (
        <div className="homePage_main_div">
            <h1>HomePage</h1>
            <div className="categoryCards_parent_div">
                {categories.map(category => <CategoryCard categoryId={category.id} />)}
            </div>
        </div>
    )
}
