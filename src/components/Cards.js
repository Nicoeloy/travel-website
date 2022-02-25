import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

import AdventureJungle from '../images/img-9.jpg'
import Luxury from '../images/img-2.jpg'
import Mystery from '../images/img-3.jpg'
import AdventureFootball from '../images/img-4.jpg'
import Adrenaline from '../images/img-8.jpg'





function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
            src={AdventureJungle}
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/services'
            />
            <CardItem
            src={Luxury}
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Luxury'
            path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
            src={Mystery}
            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
            label='Mystery'
            path='/services'
            />
            <CardItem
            src={AdventureFootball}
            text='Experience Football on Top of the Himilayan Mountains'
            label='Adventure'
            path='/products'
            />
            <CardItem
            src={Adrenaline}
            text='Ride through the Sahara Desert on a guided camel tour'
            label='Adrenaline'
            path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
