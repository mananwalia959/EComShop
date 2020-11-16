import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        width: '100%',
    },
    media: {
        height: 160,
    },
});

const ProductTile = (props) => {
    const { product } = props;
    const { _id, name, image, price } = product;
    const styles = useStyles();

    return (
        <Box display="flex" justifyContent="center">
            <Box className={styles.root}>
                <Link to={'/products/' + _id}>
                    <Card elevation={3}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="180"
                                image={image}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h2"
                                >
                                    {name}
                                </Typography>
                                <Rating product={product} />

                                <Typography
                                    color="textPrimary"
                                    variant="h4"
                                    component="h2"
                                >
                                    ${price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Box>
        </Box>
    );
};

export default ProductTile;
