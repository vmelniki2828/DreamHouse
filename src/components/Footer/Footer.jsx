import {
  FooterConteiner,
  FooterDestopBlock,
  FooterSpan,
  FooterText,
  LogoImage,
  LogoImageMob,
  SocialMediaBlock,
  SocialMediaBlockMob,
  SocialMediaBlockTab,
  SocialMediaItem,
  SocialMediaItemIcon,
} from './Footer.styled';
import logo from '../../images/footerIcon.png';

export const Footer = () => {
  return (
    <FooterConteiner>
      <LogoImageMob src={logo} />
      <SocialMediaBlockMob>
        <SocialMediaItem>soc media</SocialMediaItem>
        <SocialMediaItem>soc media</SocialMediaItem>
        <SocialMediaItem>soc media</SocialMediaItem>
        <SocialMediaItem>soc media</SocialMediaItem>
      </SocialMediaBlockMob>

      <SocialMediaBlockTab>
        <SocialMediaItem>soc media</SocialMediaItem>
        <SocialMediaItem>soc media</SocialMediaItem>
        <SocialMediaItemIcon>
          <LogoImage src={logo} />
        </SocialMediaItemIcon>
        <SocialMediaItem>soc media</SocialMediaItem>
        <SocialMediaItem>soc media</SocialMediaItem>
      </SocialMediaBlockTab>
      <FooterDestopBlock>
        <FooterText>Copyright © 2025 DREAMHOUSE</FooterText>
        <SocialMediaBlock>
          <SocialMediaItem>soc media</SocialMediaItem>
          <SocialMediaItem>soc media</SocialMediaItem>
          <SocialMediaItemIcon>
            <LogoImage src={logo} />
          </SocialMediaItemIcon>
          <SocialMediaItem>soc media</SocialMediaItem>
          <SocialMediaItem>soc media</SocialMediaItem>
        </SocialMediaBlock>
        <FooterText>
          <FooterSpan>Privacy Policy</FooterSpan>
        </FooterText>
      </FooterDestopBlock>
    </FooterConteiner>
  );
};

export default Footer;
