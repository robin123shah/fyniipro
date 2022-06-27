import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyle";
import "./footer.css";

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
            <Heading>Services</Heading>
            <FooterLink href="#">Articles</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Jobs</FooterLink>
            <FooterLink href="#">Courses</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink>
              House No. 481,Second Floor,Shiv Market BLK-WP,Village
              Wazirpur,Ashok Vihar, Delhi-110052
            </FooterLink>
          </Column>
          <Column>
            <Heading style={{ marginLeft: "15px" }}>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "20px" }}>Facebook</span>
              </i>
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "20px" }}>Instagram</span>
              </i>
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "20px" }}>Twitter</span>
              </i>
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "20px" }}>Youtube</span>
              </i>
            </FooterLink>
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
