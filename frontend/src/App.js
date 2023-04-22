import {Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { restoreUser } from './store/session';

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch])

    return isLoaded && (
        <>
            <h1>Hello from App</h1>
            <Switch>
                <Route path="/login">
                    <LoginFormPage />
                </Route>
                <Route path="/signup">
                    <SignupFormPage />
                </Route>
            </Switch>
        </>
    );
}

export default App;
