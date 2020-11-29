import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { ArrowBackSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/productService';
import Rating from './Rating';

const useStyles = makeStyles((theme) => ({
    pl3: {
        paddingLeft: 10,
    },
    productContainer: {
        padding: 20,
    },

    imageContainer: {
        padding: 50,
    },
    image: {
        width: '100%',
    },

    buttonContainer: {
        paddingTop: 10,
    },
    disabledButton: {
        backgroundColor: 'black',
        color: 'red',
    },
}));

const ProductOverview = (props) => {
    const [product, setProduct] = useState({});
    const styles = useStyles();
    const productId = props.match.params.productid;
    useEffect(
        () => {
            const execute = async () => {
                const { data } = await getProductById(productId);
                setProduct(data);
            };
            execute();
        },
        [productId] // damn pesky warning about missing dependency , remove productId if you don't care about the warning
    );

    return (
        <>
            <Link to={'/'}>
                <Box display="flex">
                    <ArrowBackSharp color="primary" />
                    <Typography color="primary" className={styles.pl3}>
                        Go Back
                    </Typography>
                </Box>
            </Link>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                spacing={3}
                className={styles.productContainer}
            >
                <Grid
                    item
                    xs={12}
                    sm={10}
                    md={5}
                    className={styles.imageContainer}
                >
                    <img
                        className={styles.image}
                        src={product.image}
                        alt={product.name}
                    ></img>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Typography variant="h4">{product.name}</Typography>
                    <Rating product={product} />
                    <Typography>{product.description}</Typography>
                </Grid>
                <Grid item container justify="space-between" xs={12} md={3}>
                    <Grid xs={6} item>
                        <Typography color="textSecondary">Price</Typography>
                    </Grid>
                    <Grid xs={6} item>
                        <Typography color="textPrimary">
                            ${product.price}
                        </Typography>
                    </Grid>
                    <Grid xs={6} item>
                        <Typography color="textSecondary">Stock</Typography>
                    </Grid>
                    <Grid xs={6} item>
                        <Typography color="textPrimary">
                            {product.countInStock > 0
                                ? 'In Stock'
                                : 'Out Of Stock'}
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        justify="center"
                        xs={12}
                        item
                        className={styles.buttonContainer}
                    >
                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            color="primary"
                            disabled={product.countInStock === 0}
                        >
                            Add to Cart
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default ProductOverview;
