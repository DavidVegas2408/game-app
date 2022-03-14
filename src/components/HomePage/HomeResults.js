import React, { Fragment } from 'react';
import GameCard from '../GamesResults/GameCard';
import { Grid } from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeResults = ({ games }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Fragment>
      <div className='home-slider'>
        <Slider {...settings}>
          {
            games.map((game, index) => {
              const {
                id,
                title,
                platform,
                short_description,
                thumbnail
              } = game;

              return (game.genre === "Strategy" && game.platform === "PC (Windows)") ? <GameCard
                key={id}
                id={id}
                title={title}
                platform={platform}
                short_description={short_description}
                thumbnail={thumbnail}
              />
                : ""
            })
          }
        </Slider>
      </div>
    </Fragment>
  )
}

export default HomeResults