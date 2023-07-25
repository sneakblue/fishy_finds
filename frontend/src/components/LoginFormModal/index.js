import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import { logout } from '../../store/session';
import { resetCart } from '../../store/cart';

export default function LoginFormModal() {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);

    const handleLogout = () => {
        dispatch(logout());
        dispatch(resetCart());
    }

    let content;
    if (sessionUser) {
        content = (
            <div>
                <h6 className='login-modal--headline'>
                    Welcome, {sessionUser.username}!
                </h6>
                <button
                    onClick={handleLogout}
                >Logout</button>
            </div>
        )
    } else {
        content = (
            <>
                <div className='login-modal-headline--container'>
                    <h6 className='login-modal--headline'>Sign-in to your Fishy Finds account</h6>
                </div>
                <LoginForm setShowModal={setShowModal}/>
            </>
        )
    }

    return (
        <>
            <div onClick={() => setShowModal(true)}>
                <i className="fas fa-user-circle profile-button--icon" />
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    {content}
                </Modal>
            )}
        </>
    );
}
