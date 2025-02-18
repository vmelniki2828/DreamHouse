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
        Берём проекты в аккорд, комплектуем бригады
        <br /> и внедряем новые технологии.
      </HeroTitle>
      <MainTitle>
        Строительная компания <br />
        <MainTitleSpan>Dream House -</MainTitleSpan>
        <br />
        надежный подрядчик
        <br /> для вашего бизнеса
      </MainTitle>
      <HeaderButtonItems>
        <ImageBlock>
          <ButtonImageBig src={header_button} alt="header_button" />
          <ImageInsideBig>Получить консультацию</ImageInsideBig>
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
