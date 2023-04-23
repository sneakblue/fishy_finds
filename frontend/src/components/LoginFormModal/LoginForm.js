import { useState } from 'react';
import { login } from '../../store/session';
import { useDispatch } from 'react-redux';

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
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
            <label>
                Username or email
                <input
                    type='text'
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                />
            </label>
            <label>
                Password
                <input
                    type='text'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Log In</button>
        </form>
    )
}
