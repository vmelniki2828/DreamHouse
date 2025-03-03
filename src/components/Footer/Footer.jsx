import {
  FooterConteiner,
  FooterText,
  LogoImage,
  MediaLink,
  SocialMediaBlock,
  SocialMediaItem,
  SocialMediaItemIcon,
} from './Footer.styled';
import logo from '../../images/Logo.png';

export const Footer = () => {
  return (
    <FooterConteiner>
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
      <FooterText>Privacy Policy</FooterText>
    </FooterConteiner>
  );
};

export default Footer;
