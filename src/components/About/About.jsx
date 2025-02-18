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
      <AboutMainTitle>О НАС</AboutMainTitle>

      <AboutBigConatiner>
        <AboutBigLeftContainer>
          <AboutBigLeftContainerText>
            <AboutBigLeftContainerTextSpan>
              {' '}
              Dream House –{' '}
            </AboutBigLeftContainerTextSpan>
            строительная компания полного цикла.
          </AboutBigLeftContainerText>
          <AboutBigLeftContainerSubText>
            Мы – не просто подрядчики, а профессионалы,{' '}
            <AboutBigLeftContainerSubTextSpan>
              которые:
            </AboutBigLeftContainerSubTextSpan>
          </AboutBigLeftContainerSubText>
          <AboutBigLeftContainerList>
            <li>Строят коммерческую и жилую недвижимость.</li>
            <li>Комплектуют бригады рабочих для стройплощадок.</li>
            <li>Принимают объекты в аккорд и гарантируют сроки сдачи.</li>
          </AboutBigLeftContainerList>
        </AboutBigLeftContainer>
        <AboutBigRightContainer>
          <AboutSliderTopConInfo>
            Фото наших объектов и рабочих в процессе работы.
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
