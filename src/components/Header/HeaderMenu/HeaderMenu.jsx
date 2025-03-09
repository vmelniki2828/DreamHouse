import {
  ButtonImage,
  CurvedDiv,
  HeaderMenuContainer,
  ImageBlock,
  ImageButtonArrow,
  ImageInside,
  InCurvedDiv,
  LogoImg,
  NavItem,
} from './HeaderMenu.styled';
import logo from '../../../images/Logo.png';
import header_button from '../../../images/header_button.png';
import button_arrow from '../../../images/button_arrow.png';

const HeaderMenu = () => {
  return (
    <HeaderMenuContainer>
      <LogoImg src={logo} alt="Logo" />
      <CurvedDiv>
        <InCurvedDiv>
          <NavItem href="#">O nas</NavItem>
          <NavItem href="#">Usługi</NavItem>
          <NavItem href="#">Zalety</NavItem>
          <NavItem href="#">Kontakt</NavItem>
        </InCurvedDiv>
      </CurvedDiv>
      <ImageBlock>
        <ButtonImage src={header_button} alt="header_button" />
        <ImageInside>Złóż zamówienie</ImageInside>
        <ImageButtonArrow src={button_arrow} alt="button_arrow" />
      </ImageBlock>
    </HeaderMenuContainer>
  );
};

export default HeaderMenu;
