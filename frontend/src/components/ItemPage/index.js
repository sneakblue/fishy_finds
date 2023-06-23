import { useParams } from 'react-router-dom';

export default function ItemPage() {
    const { id } = useParams();
    return (
        <div>
            Item Page
        </div>
    )
}
