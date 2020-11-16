import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import HomePage from './../components/HomePage';
import MyCart from './../components/MyCart';
import LoginPage from './../components/LoginPage';
import ProductOverview from '../components/ProductOverview';

const useStyles = makeStyles(() => ({
    tileContainer: {
        paddingTop: '15px',
    },
}));

const Routes = () => {
    const style = useStyles();
    return (
        <div className={style.tileContainer}>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route
                    path="/products/:productid"
                    component={ProductOverview}
                />
                <Route path="/mycart" component={MyCart} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </div>
    );
};

export default Routes;
