import {
  ButtonImageBig,
  HeaderButtonItems,
  HeaderHeroRightButton,
  HeroMainContainer,
  HeroTitle,
  ImageButtonArrowBig,
  ImageInsideBig,
  MainTitle,
  MainTitleSpan,
} from './HeaderHero.styled';
import header_button from '../../../images/header_big_botton.png';
import button_arrow from '../../../images/button_arrow.png';
import { ImageBlock } from '../HeaderMenu/HeaderMenu.styled';
import whiteBigArrow from '../../../images/whiteBigArrow.png';

const HeaderHero = () => {
  return (
    <HeroMainContainer>
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
