import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Company</Heading>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Mission</FooterLink>
            <FooterLink href="#">Team</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink>
              House No. 481,Second Floor,Shiv Market BLK-WP,Village
              Wazirpur,Ashok Vihar, Delhi-110052
            </FooterLink>
          </Column>
          <Column>
            <Heading>Company</Heading>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Mission</FooterLink>
            <FooterLink href="#">Team</FooterLink>
          </Column>
          <Column>
            <Heading style={{ marginLeft: "60px" }}>Follow us</Heading>
            <Column style={{"flex-direction":"Row"}}>
            <FooterLink href="#">
              <i className="fab fa-facebook-f" style={{"display": "inline-block", "font-size": "30px", height: "1em", overflow: "visible","vertical-align": "-.125em", "margin-left": "15px", "color":"	#4267B2","backgroundColor":"white","padding":"2px"}}>
                <span style={{ marginLeft: "20px", }}>Facebook</span>
              </i>
              </FooterLink>

              <FooterLink>
              <i className="fab fa-linkedin-in" style={{"display": "inline-block", "font-size": "30px", height: "1em", overflow: "visible","vertical-align": "-.125em", "margin-left": "15px","color":"white","backgroundColor":"#0077B5","padding":"2px"}}>
                <span style={{ marginLeft: "20px" }}>Youtube</span>
              </i>
            </FooterLink>
            <FooterLink>
              <i className="fab fa-twitter" style={{"display": "inline-block", "font-size": "30px", height: "1em", overflow: "visible","vertical-align": "-.125em", "margin-left": "15px","color":"#00ACEE","backgroundColor":"white","padding":"2px"}}>
                <span style={{ marginLeft: "20px" }}>Twitter</span>
              </i>
              </FooterLink>
            </Column>
          </Column>
        </Row>
      </Container>
      <hr />
      <h1
        style={{
          color: "#333",
          textAlign: "center",
          marginBottom: "0%",
          fontSize: "20px",
        }}
      >
        Copyright @2022 | Fynii
      </h1>
    </Box>
  );
};
export default Footer;
