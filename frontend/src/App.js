import './App.css';
import Header from './components/common/Header';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MyCart from './components/MyCart';
import LoginPage from './components/LoginPage';

const App = () => {
    return (
        <>
            <Router>
                <Header></Header>

                <Container>
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/mycart" component={MyCart} />
                        <Route path="/login" component={LoginPage} />
                    </Switch>
                </Container>
            </Router>
        </>
    );
};

export default App;
