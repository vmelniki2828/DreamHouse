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
} from './About.styled';
import try_image from '../../images/try_slider_image.png';

const About = () => {
  return (
    <AboutMainContainer>
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
          <img src={try_image} alt="try_image" />
        </AboutBigRightContainer>
      </AboutBigConatiner>
    </AboutMainContainer>
  );
};

export default About;
