// import { useState } from 'react';
import { Modal } from '../../context/Modal';
import './CartModal.css';

export default function CartModal ({ showModal, setShowModal, itemCount, item }) {


    return (
        <>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <div>
                        <h4>{itemCount} Item(s) Added to Cart</h4>
                        <div className='cartModal_item_preview--div'>
                            <img src={item.imageUrl} className='cartModal_item--img' />
                            <h5>{item.name}</h5>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}
