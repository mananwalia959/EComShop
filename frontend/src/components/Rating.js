import React from 'react';
import { Star, StarBorder, StarHalf } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

const breakintoStars = (rating) => {
    let tempRating = rating;
    const ratingArray = [];
    for (var i = 0; i < 5; i++) {
        if (tempRating >= 1) {
            ratingArray.push(1);
            tempRating--;
        } else if (tempRating >= 0.5) {
            ratingArray.push(0.5);
            tempRating = 0;
        } else {
            ratingArray.push(0);
        }
    }
    console.log(ratingArray);

    return ratingArray;
};

const Rating = (props) => {
    const { rating, numReviews } = props;
    const starRatings = breakintoStars(rating);

    return (
        <div>
            {starRatings.map((starRating) => (
                <StartRating starRating={starRating} />
            ))}
            <Typography color="textPrimary" variant="caption" component="p">
                from {numReviews} reviews
            </Typography>
        </div>
    );
};

const StartRating = (props) => {
    const { starRating } = props;

    if (starRating === 1) {
        return (
            <>
                <Star />
            </>
        );
    } else if (starRating === 0.5) {
        return (
            <>
                <StarHalf />
            </>
        );
    } else {
        return (
            <>
                <StarBorder />
            </>
        );
    }
};

export default Rating;
