import React from 'react';
import {HomeStyle,ButtonStyle,Button,Title,Container,MainContent,MainContainer,Invite,ReliableTech} from './Home.style'
import Fandom from '../../assets/home-fandom.PNG';
import Hanging from '../../assets/home-hanging.PNG';
import InviteFriends from '../../assets/home-invite.PNG';
import JustChilling from '../../assets/home-justchilling.PNG';
import Footer from '../../layouts/footer/Footer';

function Home() {
  return (
    <MainContainer>
      <Container>
  <HomeStyle>
 <MainContent>
     <Title>Imagin a place...</Title>
   <p>...where you can belong to a school club, a gaming group, or a worldwide art community.</p>
  <p> where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
 </MainContent>
 <ButtonStyle>
     <Button bg="light">Icon -Download for Mac</Button>
     <Button bg="dark">Open Discord in your browser</Button>
 </ButtonStyle>
  </HomeStyle>
  </Container>
 
<Invite><div><img src={InviteFriends} alt="Invite Friends" /></div><div><h2>Create an invite-only place where you belong</h2>
<p>Discord servers are organized into topic based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
</div></Invite>


<Invite bg={'#f6f6f6'}><div><h2>Where hanging out is easy</h2>
<p>Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.</p>
</div><div><img src={Hanging} alt="Hanging" /></div></Invite>


<Invite><div><img src={Fandom} alt="fandom" /></div><div><h2>From few to a fandom</h2>
<p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>

</div></Invite>


<ReliableTech>
 <div> <h1>Reliable Tech For Staying Close</h1>
  <p>Low-latency voice and video feels like you're in the same room. Wave hello over video, watch frineds stram their games, or gather up and have a drawing session with screen share.</p></div>
  <img src={JustChilling} alt="reliable Tech" width="100%"/>
  <h3>Ready to Start your journey?</h3>
  <button>Download for Mac</button>
</ReliableTech>

<Footer/>
  </MainContainer>
  );
}


export default Home;