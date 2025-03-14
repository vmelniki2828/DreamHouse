import {
  ButtonImageBig,
  HeaderButtonItems,
  HeaderHeroRightButton,
  HeroIcon,
  HeroMainContainer,
  HeroTitle,
  HeroTitleTab,
  ImageButtonArrowBig,
  ImageInsideBig,
  MainTitle,
  MainTitleSpan,
} from './HeaderHero.styled';
import header_button from '../../../images/header_big_botton.png';
import button_arrow from '../../../images/button_arrow.png';
import { ImageBlock } from '../HeaderMenu/HeaderMenu.styled';
import whiteBigArrow from '../../../images/whiteBigArrow.png';
import logo from '../../../images/Logo.png';
import big_logo from '../../../images/big_icon.png';

const HeaderHero = () => {
  return (
    <HeroMainContainer>
      <HeroIcon src={big_logo} />
      <HeroTitle>
        Realizujemy projekty w akordzie, kompletujemy ekipy
        <br /> i wprowadzamy nowe technologie.
      </HeroTitle>
      <MainTitle>
        Firma budowlana <br />
        <MainTitleSpan>Dream House -</MainTitleSpan>
        <br />
        niezawodny wykonawca
        <br /> dla Twojego biznesu
      </MainTitle>
      <HeroTitleTab>
        Realizujemy projekty w akordzie, kompletujemy ekipy
        <br /> i wprowadzamy nowe technologie.
      </HeroTitleTab>
      <HeaderButtonItems>
        <ImageBlock>
          <ButtonImageBig src={header_button} alt="header_button" />
          <ImageInsideBig>Uzyskaj konsultację</ImageInsideBig>
          <ImageButtonArrowBig src={button_arrow} alt="button_arrow" />
        </ImageBlock>
        <HeaderHeroRightButton>
          <img src={whiteBigArrow} alt="whiteBigArrow" />
        </HeaderHeroRightButton>
      </HeaderButtonItems>
    </HeroMainContainer>
  );
};

export default HeaderHero;
