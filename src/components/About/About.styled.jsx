import styled from 'styled-components';

export const TopBlock = styled.div`
  display: flex;
  justify-content: center;
  clip-path: polygon(
    48.632% 100%,
    49.968% 100%,
    51.303% 100%,
    99.935% 100%,
    99.935% 100%,
    98.975% 99.53%,
    98.027% 98.136%,
    97.096% 95.836%,
    96.184% 92.653%,
    95.296% 88.608%,
    94.437% 83.72%,
    93.61% 78.011%,
    92.819% 71.501%,
    92.069% 64.212%,
    91.364% 56.164%,
    91.364% 56.164%,
    90.46% 45.853%,
    89.499% 36.514%,
    88.486% 28.174%,
    87.426% 20.859%,
    86.325% 14.597%,
    85.188% 9.413%,
    84.02% 5.335%,
    82.826% 2.389%,
    81.611% 0.602%,
    80.382% 0%,
    51.303% 0%,
    49.968% 0%,
    48.632% 0%,
    19.553% 0%,
    19.553% 0%,
    18.324% 0.602%,
    17.109% 2.389%,
    15.915% 5.335%,
    14.747% 9.413%,
    13.61% 14.597%,
    12.509% 20.859%,
    11.449% 28.174%,
    10.436% 36.514%,
    9.475% 45.853%,
    8.571% 56.164%,
    8.571% 56.164%,
    7.866% 64.212%,
    7.116% 71.501%,
    6.325% 78.011%,
    5.498% 83.72%,
    4.639% 88.608%,
    3.751% 92.653%,
    2.84% 95.836%,
    1.908% 98.136%,
    0.96% 99.53%,
    0% 100%,
    48.632% 100%
  );
  background-color: white;
  width: 615px;
  height: 38px;
  margin-top: -38px;

  // @media (max-width: 1024px) {
  //   width: 616px;
  //   height: 53px;
  // }

  @media (max-width: 768px) {
    width: 294px;
    height: 18px;
    margin-top: -18px;
  }
`;

export const AboutMainContainer = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 101px;

  @media (max-width: 1024px) {
    margin-bottom: 70px;
  }

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const AboutMainTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 197px;
  height: 51px;

  border: 3px solid rgba(15, 65, 49, 0.5);
  border-radius: 75px;

  font-family: 'Onest', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 93%;
  margin-bottom: 60px;
  color: #0f4131;
`;

export const AboutBigConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 35px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 25px;
  }
`;

export const AboutBigLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 670px;

  @media (max-width: 768px) {
    width: 287px;
    margin: 25px auto;
  }
`;

export const AboutBigLeftContainerText = styled.h3`
  font-family: 'Onest', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 67px;
  line-height: 70.96px;
  text-transform: uppercase;
  margin: 0 0 32px 0;
  color: #0f4131;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const AboutBigLeftContainerTextSpan = styled.h3`
  font-weight: 700;
  margin: 0;
`;

export const AboutBigLeftContainerSubText = styled.p`
  margin: 0;
  font-family: 'Onest', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 41px;
  line-height: 43.42px;

  color: #0f4131;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 20.4337px;
    line-height: 105.91%;
    text-align: center;

    color: #0f4131;
  }
`;

export const AboutBigLeftContainerSubTextSpan = styled.span`
  margin: 0;
  font-weight: 500;
`;

export const AboutBigLeftContainerList = styled.ul`
  font-family: 'Onest', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 41px;
  line-height: 43.42px;
  margin: 20px 0 0 0;

  color: #0f4131;

  @media (max-width: 1024px) {
    list-style: none;
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-left: 0px;
  }

  @media (max-width: 768px) {
    font-size: 20.4337px;
    line-height: 105.91%;

    color: #0f4131;

    padding-left: 0px;
  }
`;

export const AboutBigRightContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AboutSliderTopConInfo = styled.div`
  margin-bottom: -39px;
  width: 100%;
  max-width: 589px;
  height: 39px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(
    26.604% 0%,
    27.334% 0%,
    28.065% 0%,
    100.001% 0%,
    100.001% 0%,
    99.475% 0.47%,
    98.957% 1.864%,
    98.447% 4.164%,
    97.948% 7.347%,
    97.463% 11.392%,
    96.993% 16.28%,
    96.54% 21.989%,
    96.108% 28.499%,
    95.698% 35.788%,
    95.312% 43.836%,
    95.312% 43.836%,
    94.817% 54.147%,
    94.291% 63.486%,
    93.737% 71.826%,
    93.157% 79.141%,
    92.555% 85.403%,
    91.933% 90.587%,
    91.294% 94.665%,
    90.641% 97.611%,
    89.977% 99.398%,
    89.304% 100%,
    28.065% 100%,
    27.334% 100%,
    26.604% 100%,
    10.697% 100%,
    10.697% 100%,
    10.024% 99.398%,
    9.359% 97.611%,
    8.706% 94.665%,
    8.067% 90.587%,
    7.445% 85.403%,
    6.843% 79.141%,
    6.263% 71.826%,
    5.709% 63.486%,
    5.183% 54.147%,
    4.689% 43.836%,
    4.689% 43.836%,
    4.303% 35.788%,
    3.893% 28.499%,
    3.46% 21.989%,
    3.008% 16.28%,
    2.538% 11.392%,
    2.052% 7.347%,
    1.553% 4.164%,
    1.044% 1.864%,
    0.525% 0.47%,
    0% 0%,
    26.604% 0%
  );
  clip-rule: evenodd;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  font-family: 'Onest', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 0%;

  color: #adadad;

  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 255.06px;
    height: 30.01px;
    font-size: 10px;
    margin-bottom: -30.01px;

    font-family: 'Onest', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.6347px;
    line-height: 0%;

    color: #adadad;
  }
`;
export const ImgSliderBlock = styled.div`
  background-color: #ffffff;
  width: 322px;
  height: 38px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 37px;

  clip-path: polygon(
    0% 100%,
    0.891% 99.53%,
    1.771% 98.136%,
    2.636% 95.836%,
    3.483% 92.653%,
    4.307% 88.607%,
    5.105% 83.72%,
    5.873% 78.011%,
    6.607% 71.501%,
    7.303% 64.212%,
    7.958% 56.164%,
    7.958% 56.164%,
    8.797% 45.853%,
    9.69% 36.514%,
    10.63% 28.174%,
    11.614% 20.859%,
    12.636% 14.597%,
    13.692% 9.413%,
    14.777% 5.335%,
    15.885% 2.389%,
    17.013% 0.602%,
    18.154% 0%,
    45.153% 0%,
    46.392% 0%,
    47.632% 0%,
    81.846% 0%,
    82.987% 0.602%,
    84.115% 2.389%,
    85.223% 5.335%,
    86.308% 9.413%,
    87.364% 14.597%,
    88.386% 20.859%,
    89.37% 28.174%,
    90.31% 36.514%,
    91.203% 45.853%,
    92.042% 56.164%,
    92.042% 56.164%,
    92.697% 64.212%,
    93.393% 71.501%,
    94.128% 78.011%,
    94.895% 83.72%,
    95.693% 88.607%,
    96.517% 92.653%,
    97.364% 95.836%,
    98.229% 98.136%,
    99.109% 99.53%,
    100% 100%,
    47.632% 100%,
    46.392% 100%,
    45.153% 100%
  );
  clip-rule: evenodd;

  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    bottom: 29px;
    width: 254.27px;
    height: 30.01px;
  }
`;

export const SliderWrapper = styled.div`
  width: 622px;
  height: 699px;
  margin: 0 auto;
  overflow: hidden;

  .slick-slide img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  .slick-dots {
    bottom: 5px;
    z-index: 2;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 380px;

    .slick-slide img {
      width: 100%;
      height: 380px;
      display: block;
      object-fit: cover;
    }
  }
`;

export const AboutMobContainerText = styled.div`
  font-family: 'Onest', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 67px;
  line-height: 105.91%;
  text-align: center;
  text-transform: uppercase;

  color: #0f4131;

  margin-bottom: 40px;

  @media (min-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 105.91%;

    color: #0f4131;
    margin-bottom: 30px;
  }
`;
