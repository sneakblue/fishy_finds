import { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

export default function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div onClick={() => setShowModal(true)}>
                <i className="fas fa-user-circle profile-button--icon" />
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </>
    );
}
