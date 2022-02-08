import React from 'react';
import {HomeStyle,ButtonStyle,Title,Container,MainContent} from './Home.style'

function Home() {
  return (
      <Container>
  <HomeStyle>

 <MainContent>
     <Title>Imagin a place...</Title>
   <p>...where you can belong to a school club, a gaming group, or a worldwide art community.</p>
  <p> where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
 </MainContent>
 <div>
     <ButtonStyle bg="light">Icon -Download for Mac</ButtonStyle>
     <ButtonStyle bg="dark">Open Discord in your browser</ButtonStyle>
 </div>

  </HomeStyle>
  </Container>
  );
}


export default Home;