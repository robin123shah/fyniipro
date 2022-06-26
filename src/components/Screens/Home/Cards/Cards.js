import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import CardItem2 from './CardItem2';

function Cards(props) {
  const topic = props.topic
  const Details = [
    {
      id: "1",
      scr:"../../images/img-9.jpg",
      text:"Explore the hidden waterfall deep inside the Amazon Jungle",
      label:"Software Development",
      path:"/Home"
    },
    {
      id: "2",
      scr:"../../images/img-2.jpg",
      text:"Travel through the Islands of Bali in a Private Cruise",
      label:"Software Development",
      path:"/Home"
    },
    { 
      id: "3",
      scr:"../../images/img-1.jpg",
      text:"Travel through the Islands of Bali in a Private Cruise",
      label:"Mathematics",
      path:"/Home" 
    },
    { 
      id: "4",
      scr:"../../images/img-3.jpg",
      text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",
      label:"Mathematics",
      path:"/Home" 
    },
    { 
      id: "5",
      scr:"../../images/img-8.jpg",
      text:"Ride through the Sahara Desert on a guided camel tour",
      label:"Management",
      path:"/Home" 
    },

  ]

 
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {
              Details.map((e)=>(
                <CardItem
                src={e.scr}
                text={e.text}
                label={e.label}
                path={e.path}
                topic = {topic}
              />
              ))
            }
            </ul>
            <div style={{"fontSize":"31px","paddingLeft":"32px"}}>{topic}</div>
            <ul className='cards__items2'>
              {
                 Details.map((e)=>(
                  <CardItem2
                  src={e.scr}
                  text={e.text}
                  label={e.label}
                  path={e.path}
                  topic = {topic}
                />
                ))
              }

            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;