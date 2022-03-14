import React from 'react';
import { Grid } from '@material-ui/core';

const GamesImages = ({ id, image, title }) => {
    return (
        <Grid item xs={6} sm={3}>
            <div className='content-img'>
                <img src={image} alt={title} />
            </div>
        </Grid>
    )
}

export default GamesImages