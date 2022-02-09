import React from "react";
import { FooterStyle, FlexBox, FooterLinks,MainFooter } from "./Footer.style";

function Footer() {
  return (
    <FooterStyle>
      <MainFooter>
        <div>
          <div>Imagine a place</div>
          <div>English</div>
          <div>Social media</div>
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
