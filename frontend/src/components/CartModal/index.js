import { useState } from 'react';
import { Modal } from '../../context/Modal';

export default function CartModal ({ showModal, setShowModal, itemCount }) {
    

    return (
        <>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div>
                        <h4>{itemCount} Item Added to Cart</h4>
                    </div>
                </Modal>
            )}
        </>
    )
}
