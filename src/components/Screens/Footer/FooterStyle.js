import styled from "styled-components";

export const Box = styled.div`
  padding: 1% 2%;
  background: #96deb2;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  /* gap: 60px; */
  @media (max-width: 1000px) {
    padding: 30px 30px;
  }
  @media (max-width: 450px) {
    gap:2px
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  gap: 60px;
  /* background: red; */
  @media (max-width: 450px) {
    flex-direction: column;
    gap:2px
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const ColumnFollow = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left:30px;
  @media (max-width: 450px) {
    margin-left:0px;
  }
`;

export const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  /* grid-template-columns: repeat(auto-fill, minmax(185px, 1fr)); */
  gap: 60px;
  justify-content: center;
  @media (max-width: 450px){
    display:flex;
    flex-direction: row;
  }
`;
export const Row2 = styled.div`
  display: flex;
  /* grid-template-columns: repeat(auto-fill, minmax(185px, 1fr)); */
  gap: 60px;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 450px){
    display:flex;
    flex-direction: row;
  }

  @media (max-width: 1000px) {
    
  }
`;

export const FooterLink = styled.a`
  color: #333;
  margin-bottom: 5px;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  color: #000;
  margin-bottom: 20px;
  font-weight: bold;
`;
