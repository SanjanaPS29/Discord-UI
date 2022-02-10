import React from "react";
import { FooterStyle, FlexBox, FooterLinks,MainFooter,PStyle,SocailMedia,Icon } from "./Footer.style";
import UsaFlag from '../../assets/image-footer/usaFlag.png';
import {AiOutlineYoutube,AiOutlineInstagram,AiOutlineFacebook} from 'react-icons/ai';
import {FaTwitter} from 'react-icons/fa';

function Footer() {
  return (
    <FooterStyle>
      <MainFooter>
        <div>
          <PStyle>Imagine a place</PStyle>
          <div><div><img src={UsaFlag} width="30%" alt="usa flag"/></div><div>English, USA</div></div>
      <SocailMedia><Icon><FaTwitter/></Icon><Icon><AiOutlineInstagram/></Icon><Icon><AiOutlineFacebook/></Icon><Icon><AiOutlineYoutube/></Icon></SocailMedia>
        </div>
        <FooterLinks>
          <FlexBox>
            <div>Product</div>
            <div>Download</div>
            <div>Nitro</div>
            <div>Status</div>
          </FlexBox>

          <FlexBox>
            <div>Company</div>
            <div>About</div>
            <div>Jobs</div>
            <div>Branding</div>
            <div>Newsroom</div>
          </FlexBox>

          <FlexBox>
            <div>Resources</div>
            <div>Collage</div>
            <div>Support</div>
            <div>Safety</div>
            <div>Blog</div>
            <div>Feedback</div>
            <div>Develops</div>
            <div>StramKit</div>
          </FlexBox>

          <FlexBox>
            <div>Policies</div>
            <div>Terms</div>
            <div>Privacy</div>
            <div>Guidelines</div>
            <div>Acknowledgements</div>
            <div>Licenses</div>
            <div>Moderation</div>
          </FlexBox>
        </FooterLinks>
      </MainFooter>
      <div><hr/></div>
      <div>Discord signup</div>
    </FooterStyle>
  );
}

export default Footer;
