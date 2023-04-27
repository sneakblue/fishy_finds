import {Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { restoreUser } from './store/session';

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch])

    return (
        <>
            <Navigation isLoaded={isLoaded}/>
            {isLoaded && (
                <Switch>
                    <Route path="/signup">
                        <SignupFormPage />
                    </Route>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                </Switch>
            )}
        </>
    );
}

export default App;
