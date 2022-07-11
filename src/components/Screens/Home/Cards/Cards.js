import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import CardItem2 from "./CardItem2";
function Cards(props) {
  const topic = props.topic;
  const Details = [
    {
      id: "1",
      scr: "../../images/1.jpg",
      text: "How to choose right career for you?",
      label: "Career",
      path: "/Home",
    },
    {
      id: "2",
      scr: "../../images/2.jpg",
      text: "Here's why Interest and passion will lead to great career!",
      label: "Career",
      path: "/Home",
    },
    {
      id: "3",
      scr: "../../images/img-1.jpg",
      text: "Travel through the Islands of Bali in a Private Cruise",
      label: "Mathematics",
      path: "/Home",
    },
    {
      id: "4",
      scr: "../../images/img-3.jpg",
      text: "Set Sail in the Atlantic Ocean visiting Uncharted Waters",
      label: "Software Development",
      path: "/Home",
    },
    {
      id: "5",
      scr: "../../images/img-8.jpg",
      text: "Ride through the Sahara Desert on a guided camel tour",
      label: "Management",
      path: "/Home",
    },
    
  ];

  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <hr
            style={{
              backgroundColor: "#333",
              borderRadius: "10px",
              height: "5px",
            }}
          />
          <div
            style={{
              fontSize: "31px",
              textAlign:"center",
              fontFamily: "serif",
              color: "#540323",
            }}
          >
            Career
          </div>
          <hr
            style={{
              backgroundColor: "#9A432A",
              borderRadius: "10px",
              height: "3px",
              marginBottom: "10px",
              
            }}
          />
          <ul className="cards__items">
            {Details.map((e) => (
              <CardItem
                src={e.scr}
                text={e.text}
                label={e.label}
                path={e.path}
                topic={topic}
              />
            ))}
          </ul>
          </div>
          <div className="cards__wrapper">
          <hr
            style={{
              backgroundColor: "#333",
              borderRadius: "10px",
              height: "5px",
            }}
          />
           <div
            style={{
              fontSize: "31px",
              fontFamily: "serif",
              color: "#540323",
              textAlign:"center"
            }}
          >
            {topic}
          </div>
          <hr
            style={{
              backgroundColor: "#9A432A",
              borderRadius: "10px",
              height: "3px",
              marginBottom: "10px",
            }}
          />
          <ul className="cards__items2">
            {Details.map((e) => (
              <CardItem2
                src={e.scr}
                text={e.text}
                label={e.label}
                path={e.path}
                topic={topic}
              />
            ))}
            
          </ul>
          <div className="cards__wrapper">
          <hr
            style={{
              backgroundColor: "#333",
              borderRadius: "10px",
              height: "5px",
            }}
          />
          <div
            style={{
              fontSize: "31px",
              textAlign:"center",
              fontFamily: "serif",
              color: "#540323",
            }}
          >
            Software Development
          </div>
          <hr
            style={{
              backgroundColor: "#9A432A",
              borderRadius: "10px",
              height: "3px",
              marginBottom: "10px",
            }}
          />
          <ul className="cards__items2">
            {Details.map((e) => (
              <CardItem2
                src={e.scr}
                text={e.text}
                label={e.label}
                path={e.path}
                topic={"Software Development"}
              />
            ))}
          </ul>
          </div>
          <div className="cards__wrapper">
          <hr
            style={{
              backgroundColor: "#333",
              borderRadius: "10px",
              height: "5px",
            }}
          />
          <div
            style={{
              fontSize: "31px",
              fontFamily: "serif",
              color: "#540323",
              textAlign:"center"
            }}
          >
            Mathematics
          </div>
          <hr
            style={{
              backgroundColor: "#9A432A",
              borderRadius: "10px",
              height: "3px",
              marginBottom: "10px",
            }}
          />
          <ul className="cards__items2">
            {Details.map((e) => (
              <CardItem2
                src={e.scr}
                text={e.text}
                label={e.label}
                path={e.path}
                topic={"Mathematics"}
              />
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
