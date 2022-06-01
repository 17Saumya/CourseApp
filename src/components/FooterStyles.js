import styled from 'styled-components';
   
export const Box = styled.div`
 // padding: 1px 1px;
  background: black;
  position: static;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 10px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
  
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 10fr));
  grid-gap: 5px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(100px, 10fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 15px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`;