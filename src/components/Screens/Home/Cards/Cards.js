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
      text: "How to choose right career for you? Learn here.",
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
      id: "10",
      scr: "../../images/c1.jpg",
      text: "Career in Govt. vs Private sector Explained!",
      label: "Career",
      path: "/Home",
    },
    {
      id: "11",
      scr: "../../images/c5.jpeg",
      text: "Focus on Making career Instead of just getting a job!",
      label: "Career",
      path: "/Home",
    },
    {
      id: "12",
      scr: "../../images/c4.jpeg",
      text: " You can't lead to a great career without leading yourself first!",
      label: "Career",
      path: "/Home",
    },

    {
      id: "3",
      scr: "../../images/m1.jpg",
      text: "Mathematics is the science that deals with the logic of shape.",
      label: "Mathematics",
      path: "/Home",
    },
    {
      id: "4",
      scr: "../../images/s1.jpg",
      text: "Software development is the process of creating a piece of software.  ",
      label: "Software Development",
      path: "/Home",
    },
    {
      id: "5",
      scr: "../../images/s2.jpg",
      text: "Software development is the process of creating a piece of software.  ",
      label: "Software Development",
      path: "/Home",
    },
    {
      id: "6",
      scr: "../../images/s3.jpg",
      text: "Software development is the process of creating a piece of software.  ",
      label: "Software Development",
      path: "/Home",
    },
    {
      id: "7",
      scr: "../../images/ma1.png",
      text: "Management is a process of planning, decision making, organizing.",
      label: "Management",
      path: "/Home",
    },
    {
      id: "8",
      scr: "../../images/m3.jpg",
      text: "Mathematics is the science that deals with the logic of shape.",
      label: "Mathematics",
      path: "/Home",
    },
    {
      id: "9",
      scr: "../../images/m2.jpg",
      text: "Mathematics is the science that deals with the logic of shape.",
      label: "Mathematics",
      path: "/Home",
    },
    {
      id: "12",
      scr: "../../images/cvs1.jpeg",
      text: "Career in civil services.",
      label: "Civil Services",
      path: "/Home",
    },
    {
      id: "13",
      scr: "../../images/ES1.jpeg",
      text: "Career in Engineering Sciences.",
      label: "Engineering Sciences",
      path: "/Home",
    },
    {
      id: "14",
      scr: "../../images/MS1.jpeg",
      text: "Career in Medical Sciences.",
      label: "Medical Sciences",
      path: "/Home",
    },
    {
      id: "15",
      scr: "../../images/DS1.jpeg",
      text: "Career in defense services.",
      label: "Defense Services",
      path: "/Home",
    },
    {
      id: "16",
      scr: "../../images/DS@.jpeg",
      text: " STEM career in defense services.",
      label: "Defense Services",
      path: "/Home",
    },
    {
      id: "18",
      scr: "../../images/BFSI1.jpeg",
      text: " Career in BFSI sector.",
      label: "BFSI sector",
      path: "/Home",
    },
    {
      id: "19",
      scr: "../../images/DSC1.jpeg",
      text: " Career in Data Science.",
      label: "Data Science",
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
              textAlign: "center",
              fontFamily: "serif",
              color: "#540323",
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
              textAlign: "center",
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
                textAlign: "center",
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
                textAlign: "center",
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
                textAlign: "center",
              }}
            >
              Civil Services
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
                  topic={"Civil Services"}
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
                textAlign: "center",
              }}
            >
              Engineering Sciences
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
                  topic={"Engineering Sciences"}
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
                textAlign: "center",
              }}
            >
              Medical Sciences
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
                  topic={"Medical Sciences"}
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
                textAlign: "center",
              }}
            >
              Defence Services
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
                  topic={"Defense Services"}
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
                textAlign: "center",
              }}
            >
              BFSI career
                <i class="fa-solid fa-circle-info style-i"></i>
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
                  topic={"BFSI sector"}
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
                textAlign: "center",
              }}
            >
              Data Science
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
                  topic={"Data Science"}
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
