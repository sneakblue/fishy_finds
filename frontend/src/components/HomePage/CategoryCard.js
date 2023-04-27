import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function CategoryCard({ categoryId }) {

    const category = useSelector((state) => state.categories[categoryId]);
    const [showCategories, setShowCategories] = useState(false);

    let content;
    if (showCategories) {
        content = (
            <>
                <Link to={`category/${category.id}`}>
                    <h5 className="categoryCard_title">{category.title.toUpperCase()}</h5>
                </Link>
            </>
        )
    } else {
        content = (
            <>
                <h5 className="categoryCard_title">{category.title.toUpperCase()}</h5>
            </>
        )
    }

    return (
        <div className="categoryCard_main_div">
            <div
                className="categoryCard_titles_background_div"
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
            >
                {/* <h5 className="categoryCard_title">{category.title.toUpperCase()}</h5> */}
                {content}
            </div>
        </div>
    )
}
