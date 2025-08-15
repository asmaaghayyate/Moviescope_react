
import styled from "styled-components";
const AboutSection = styled.section`
  padding: 100px;
  display: flex;
  margin-top:0;
  text-align: center;
  border-top:2px solid rgba(233, 225, 233, 1);

@media (max-width: 768px) {

  flex-direction: column; /* Form et nav-links en colonne */
  padding: 10px;


}

`;

// Titre
const Title = styled.h1`
  font-size: 2rem;
  color: #f5c518; /* Jaune IMDb */
  margin-bottom: 20px;
`;

// Paragraphe
const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.6;
  display: flex;
    flex-direction: column;
margin-right:70px;
margin-left:70px;
line-height:60px;
  color:black;

`;
 const AboutImage = styled.img`
  width: 900px;
  height: 600px;
  object-fit: cover;
  border-top-left-radius: 300px;
  border-top-right-radius: 300px;
border-bottom-left-radius: 300px;
  border-bottom-right-radius: 300px;

  @media (max-width: 768px) {
  width: 300px;
    height: auto;
  margin-left:80px;
  margin-bottom:20px;

  }
`;
const P = styled.strong`
  font-size: 31.5pt;
    color: #dd3333;
    letter-spacing: -0.75pt;
    font-family:Arial	;
      font-weight: 300;
`;




export default function About() {
  return (
   <AboutSection>
    <Paragraph>
      <P>MOVIESCOPE C'EST:</P> 

Une BOUTIQUE  où vous pouvez trouver # des affiches originales de cinéma # des photos de cinéma # des posters de cinéma mais aussi de moult séries # des cartes postales   #des DVDs 
# et même quelques petits goodies!

Un ESPACE UNIQUE  ET ATYPIQUE puisque nous sommes la seule boutique spécialisée de ce genre à NANTES 

Un LIEU D'ÉCHANGE pour les amoureux du CINÉMALa PREUVE que les boutiques de proximité ne sont pas mortes et qu'internet n'a pas tout emporté!
      </Paragraph>
  <AboutImage src="../images/about.jpg"  />      
    </AboutSection>
  );
}