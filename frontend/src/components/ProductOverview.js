import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { ArrowBackSharp } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import products from './../products';
import Rating from './Rating';

const useStyles = makeStyles({
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
});

const ProductOverview = (props) => {
    const { match } = props;
    const id = match.params.productid;
    const product = products.find((prod) => prod._id === id);
    const {
        image,
        name,
        description,
        rating,
        numReviews,
        price,
        countInStock,
    } = product;
    const styles = useStyles();
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
                    <img className={styles.image} src={image}></img>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Typography variant="h4">{name}</Typography>
                    <Rating rating={rating} numReviews={numReviews} />
                    <Typography>{description}</Typography>
                </Grid>
                <Grid item container justify="space-between" xs={12} md={3}>
                    <Grid xs={6} item>
                        <Typography color="textSecondary">Price</Typography>
                    </Grid>
                    <Grid xs={6} item>
                        <Typography color="textPrimary">${price}</Typography>
                    </Grid>
                    <Grid xs={6} item>
                        <Typography color="textSecondary">Stock</Typography>
                    </Grid>
                    <Grid xs={6} item>
                        <Typography color="textPrimary">
                            {countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
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
