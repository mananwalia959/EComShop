import './App.css';
import Header from './components/common/Header';
import { Container } from '@material-ui/core';
import Routing from './Routing/Routing';

const App = () => {
    return (
        <>
            <Header></Header>

            <Container>
                <Routing />
            </Container>
        </>
    );
};

export default App;
