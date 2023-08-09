import { useState } from "react";
import { CategoryModal } from "../../context/Modal";

export default function CatgoryNavModal({}) {
    const [ showModal, setShowModal ] = useState(false);

    return (
        <>
            <div onClick={() => setShowModal(true)}>
                <i className='fas fa-bars navbar-category-menu--icon'/>
            </div>
            {showModal && (
                <CategoryModal onClose={(() => setShowModal(false))}>
                    
                </CategoryModal>
            )}
        </>
    )
}
