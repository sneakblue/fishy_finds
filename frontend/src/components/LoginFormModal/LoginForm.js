import { useState } from 'react';
import { login } from '../../store/session';
import { useDispatch } from 'react-redux';
import './LoginFormModal.css';

export default function LoginForm() {
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
    console.log(entered);

    if (entered) {
        let button = document.querySelector('#login_button');
        // button.disabled = false;
        if (button) {
            button.classList.add('valid_button');
        }
    } else {
        let button = document.querySelector('#login_button');
        // button.disabled = true;
        if (button) {
            button.classList.remove('valid_button');
        }
    }

    return (
        <form onSubmit={handleSubmit} className='loginForm_container'>
            <ul>
                {errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
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
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='loginForm_input'
                required
            />
            <button id='login_button' type="submit" className='loginForm--button'>SIGN IN</button>
        </form>
    )
}
