import {
  AboutBigConatiner,
  AboutBigLeftContainer,
  AboutBigLeftContainerText,
  AboutBigLeftContainerTextSpan,
  AboutMainContainer,
  AboutMainTitle,
  AboutBigLeftContainerSubText,
  AboutBigLeftContainerSubTextSpan,
  AboutBigLeftContainerList,
  AboutBigRightContainer,
  AboutSliderTopConInfo,
  TopBlock,
  SliderWrapper,
  ImgSliderBlock,
  AboutMobContainerText,
} from './About.styled';
import try_image from '../../images/try_slider_image.png';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <AboutMainContainer>
      <TopBlock />
      <AboutMainTitle>O NAS</AboutMainTitle>

      <AboutMobContainerText>
        <AboutBigLeftContainerTextSpan>
          Dream House –
        </AboutBigLeftContainerTextSpan>
        firma budowlana o pełnym zakresie usług.
      </AboutMobContainerText>

      <AboutBigConatiner>
        <AboutBigLeftContainer>
          <AboutBigLeftContainerText>
            <AboutBigLeftContainerTextSpan>
              Dream House –
            </AboutBigLeftContainerTextSpan>
            firma budowlana o pełnym zakresie usług.
          </AboutBigLeftContainerText>
          <AboutBigLeftContainerSubText>
            Nie jesteśmy tylko wykonawcą, ale profesjonalistami,
            <AboutBigLeftContainerSubTextSpan>
              którzy:
            </AboutBigLeftContainerSubTextSpan>
          </AboutBigLeftContainerSubText>
          <AboutBigLeftContainerList>
            <li>Budują nieruchomości komercyjne i mieszkalne.</li>
            <li>Kompletują ekipy pracowników na place budowy.</li>
            <li>
              Przyjmują obiekty w akordzie, gwarantując terminowe oddanie.
            </li>
          </AboutBigLeftContainerList>
        </AboutBigLeftContainer>
        <AboutBigRightContainer>
          <AboutSliderTopConInfo>
            Zdjęcia naszych obiektów i pracowników w trakcie pracy.
          </AboutSliderTopConInfo>
          <SliderWrapper>
            <Slider {...settings}>
              <div>
                <img src={try_image} alt="try_image" />
              </div>
              <div>
                <img src={try_image} alt="try_image" />
              </div>
              <div>
                <img src={try_image} alt="try_image" />
              </div>
              <div>
                <img src={try_image} alt="try_image" />
              </div>
              <div>
                <img src={try_image} alt="try_image" />
              </div>
            </Slider>
          </SliderWrapper>
          <ImgSliderBlock />
        </AboutBigRightContainer>
      </AboutBigConatiner>
    </AboutMainContainer>
  );
};

export default About;
