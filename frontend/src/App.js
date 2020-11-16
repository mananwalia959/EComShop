import './App.css';
import Header from './components/common/Header';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routing/Routes';

const App = () => {
    return (
        <>
            <Router>
                <Header></Header>

                <Container>
                    <Routes />
                </Container>
            </Router>
        </>
    );
};

export default App;
