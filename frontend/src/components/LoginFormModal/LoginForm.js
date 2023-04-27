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

    return (
        <form onSubmit={handleSubmit} className='loginForm_container'>
            <ul>
                {errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
            <label>
                Username or email
            </label>
            <input
                type='text'
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                className='loginForm_input'
                required
            />
            <label>
                Password
            </label>
            <input
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='loginForm_input'
                required
            />
            <button type="submit">Log In</button>
        </form>
    )
}
