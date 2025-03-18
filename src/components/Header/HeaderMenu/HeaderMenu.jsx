import React from 'react';
import {
  ButtonImage,
  CurvedDiv,
  HeaderMenuContainer,
  ImageBlockMenu,
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
  const scrollToSection = id => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderMenuContainer>
      <LogoImg src={logo} alt="Logo" />
      <CurvedDiv>
        <InCurvedDiv>
          <NavItem onClick={() => scrollToSection('AboutUs')}>O nas</NavItem>
          <NavItem onClick={() => scrollToSection('Services')}>Usługi</NavItem>
          <NavItem onClick={() => scrollToSection('WorkType')}>Zalety</NavItem>
          <NavItem onClick={() => scrollToSection('Contact')}>Kontakt</NavItem>
        </InCurvedDiv>
      </CurvedDiv>
      <ImageBlockMenu>
        <ButtonImage src={header_button} alt="header_button" />
        <ImageInside>Złóż zamówienie</ImageInside>
        <ImageButtonArrow src={button_arrow} alt="button_arrow" />
      </ImageBlockMenu>
    </HeaderMenuContainer>
  );
};

export default HeaderMenu;
