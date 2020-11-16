import React from 'react';
import { Grid } from '@material-ui/core';
import products from './../products';
import ProductTile from './ProductTile';

const HomePage = () => {
    return (
        <>
            <div>
                <Grid
                    container
                    alignContent="center"
                    justify="flex-start"
                    spacing={3}
                >
                    {products.map((product) => (
                        <Grid
                            key={product._id}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                        >
                            <ProductTile product={product} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
};

export default HomePage;
