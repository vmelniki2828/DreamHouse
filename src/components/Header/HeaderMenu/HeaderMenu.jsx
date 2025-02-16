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
          <NavItem href="#">О нас</NavItem>
          <NavItem href="#">Услуги</NavItem>
          <NavItem href="#">Преимущества</NavItem>
          <NavItem href="#">Контакты</NavItem>
        </InCurvedDiv>
      </CurvedDiv>
      <ImageBlock>
        <ButtonImage src={header_button} alt="header_button" />
        <ImageInside>Оставить заявку</ImageInside>
        <ImageButtonArrow src={button_arrow} alt="button_arrow" />
      </ImageBlock>
    </HeaderMenuContainer>
  );
};

export default HeaderMenu;
