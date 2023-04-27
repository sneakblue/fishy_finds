import { useParams } from 'react-router-dom';

export default function CategoryPage() {
    const { id } = useParams();
    return (
        <>
            <h2>Category Page</h2>
        </>
    )
}
