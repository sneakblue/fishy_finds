import {Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
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
            </Switch>
        </>
    );
}

export default App;
