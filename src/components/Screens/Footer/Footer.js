import React from "react";
import "./Footer.css"
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  ColumnFollow,
} from "./FooterStyle";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Company</Heading>
            <FooterLink href="/About">About</FooterLink>
            <FooterLink href="#">Career</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms and Conditions</FooterLink>
            <FooterLink href="#">Help Center</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Blogging</FooterLink>
            <FooterLink href="#">Jobs</FooterLink>
            <FooterLink href="#">Internship</FooterLink>
            <FooterLink href="#">Courses</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink style={{"textAlign":"justify"}}>
              House No. 481, Second Floor, Shiv Market BLK-WP, Village Wazirpur, Ashok Vihar, Delhi-110052
            </FooterLink>
          </Column>

          <ColumnFollow >
            <Heading  >Follow us</Heading>
            <Column style={{ "flex-direction": "Row",marginLeft:0 }}>
              <FooterLink target="_blank" rel="noreferrer" href="https://l.facebook.com/l.php?u=https%3A%2F%2Ffb.me%2FFyniiGlobal&h=AT31NCQpgGnpIC5D0bij9SVlJChEpirAC3Fmv1sJ0HfP_SBWLn2_Ujeub2wyIshbkrwoEXNogjfULsFzX0_LD2_1fu7Y6x4vIbPFe9wW38n4nBxH0csaLIUy0nI72JCMfCvAQQ">
                <i
                  className="fab fa-facebook-f"
                  style={{
                    display: "inline-block",
                    "font-size": "30px",
                    height: "1em",
                    overflow: "visible",
                    "vertical-align": "-.125em",
                    "margin-left": "15px",
                    color: "	#4267B2",
                    padding: "2px",
                  }}
                >
                </i>
              </FooterLink>

              <FooterLink href="https://www.linkedin.com/company/fynii/?viewAsMember=true" target="_blank" rel="noreferrer">
                <i
                  className="fab fa-linkedin-in"
                  style={{
                    display: "inline-block",
                    "font-size": "30px",
                    height: "1em",
                    overflow: "visible",
                    "vertical-align": "-.125em",
                    "margin-left": "15px",
                    color: "white",
                    backgroundColor: "#0077B5",
                    padding: "2px",
                  }}
                >
                </i>
              </FooterLink>
              <FooterLink>
                <i
                  className="fab fa-twitter"
                  style={{
                    display: "inline-block",
                    "font-size": "30px",
                    height: "1em",
                    overflow: "visible",
                    "vertical-align": "-.125em",
                    "margin-left": "15px",
                    color: "#00ACEE",
                    padding: "2px",
                  }}
                >
                </i>
              </FooterLink>
            </Column>
          </ColumnFollow>
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
