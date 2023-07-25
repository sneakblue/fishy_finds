import { useState } from 'react';
import { login } from '../../store/session';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartItems } from '../../store/cart';
import './LoginFormModal.css';

export default function LoginForm({ setShowModal }) {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        )
    }

    let entered = (credential !== '' && password !== '') ? true : false;

    if (entered) {
        let button = document.querySelector('#login_button');
        if (button) {
            button.classList.add('valid_button');
        }
    } else {
        let button = document.querySelector('#login_button');
        if (button) {
            button.classList.remove('valid_button');
        }
    }

    return (
        <form onSubmit={handleSubmit} className='loginForm_container'>
            <div className='login_error--div'>
                {errors.map((error, i) => (
                    <p className='login_error' key={i}>{error}</p>
                ))}
            </div>
            <label className='loginForm-input--label'>
                Username or Email<p className='required-asterisk'>*</p>
            </label>
            <input
                type='text'
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                className='loginForm_input'
                required
            />
            <label className='loginForm-input--label'>
                Password<p className='required-asterisk'>*</p>
            </label>
            <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='loginForm_input'
                required
            />
            <button id='login_button' type="submit" className='loginForm--button'>SIGN IN</button>
            <Link to='/signup' className='signup-button--link'>
                <button className='signup--button' onClick={() => setShowModal(false)}>CREATE AN ACCOUNT</button>
            </Link>
        </form>
    )
}
