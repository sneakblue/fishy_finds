import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { CategoryModal } from "../../context/Modal";
import './Navigation.css';

export default function CatgoryNavModal({}) {
    const [ showModal, setShowModal ] = useState(false);
    const categories = useSelector(state => Object.values(state.categories));
    // console.log(categories)

    return (
        <>
            <div onClick={() => setShowModal(!showModal)}>
                <i className='fas fa-bars navbar-category-menu--icon'/>
            </div>
            {showModal && (
                <CategoryModal onClose={(() => setShowModal(false))}>
                    <div className="category-nav-modal--div">
                        {categories.map(category => {
                            return (
                                <Link
                                    to={`/category/${category.id}`}
                                    className='category-nav--link'
                                    onClick={() => setShowModal(false)}
                                >
                                    {category.title}
                                </Link>
                            )
                        })}
                    </div>
                </CategoryModal>
            )}
        </>
    )
}
