import React from 'react'
import { Grid, styled } from '@material-ui/core';
import { Link } from "react-router-dom";

const MyLink = styled(Link)({
    textDecoration: 'none',
  });

const GameCard = ({ id, title, platform, short_description, thumbnail }) => {
  return (
  
        <div className='game-card'>
            <MyLink className="buttonPrimary" to={`/games/details/${id}`}>
                <img src={thumbnail} alt={title} spacing={2} />
                <p className='title-card'>
                    {title}
                </p>
                <p className="subtitle text" >
                    {short_description}
                </p>
                <p className="subtitle right" >
                    {platform}
                </p>
            </MyLink>
        </div>
    
  )
}

export default GameCard