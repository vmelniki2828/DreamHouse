import styled from 'styled-components';
import service_bg from '../../images/service_test_img.png';
import { FaArrowRight } from 'react-icons/fa';

export const ServicesMainContainer = styled.div`
  padding: 0 40px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ServicesMainTitle = styled.div`
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
  margin-bottom: 80px;
  color: #0f4131;
`;

export const ServiceBlock = styled.div``;

export const ServiceList = styled.ul`
  list-style: none;

  display: flex;
  gap: 46px;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0px;
  margin-top: 0px;
  justify-content: center;

  max-width: 1400px;
`;

export const ServiceItem = styled.li`
  width: 410px;
  height: 460px;

  background-image: url(${service_bg});
  background-size: cover;
  background-position: center;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
`;

export const ItemMainText = styled.h1`
  font-family: 'Onest';
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 116%;
  text-align: center;

  color: #ffffff;

  margin: 0;
`;

export const ItemButtonBlock = styled.div`
  background-color: ${({ isHovered }) => (isHovered ? '#0f4131' : '#FFFFFF')};
  width: 364px;
  height: 43px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: ${({ isHovered }) => (isHovered ? '0' : '-1px')};

  transition: background-color 0.3s ease-in-out, bottom 0.3s ease-in-out;

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
`;

export const HoveredBlock = styled.div`
  background-color: #ffffff;
  width: 271px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
  visibility: ${({ isHovered }) => (isHovered ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  position: absolute;
  top: 0;

  clip-path: polygon(
    0% 0%,
    0.891% 0.47%,
    1.771% 1.864%,
    2.636% 4.164%,
    3.483% 7.347%,
    4.307% 11.393%,
    5.105% 16.28%,
    5.873% 21.989%,
    6.607% 28.499%,
    7.303% 35.788%,
    7.958% 43.836%,
    7.958% 43.836%,
    8.797% 54.147%,
    9.69% 63.486%,
    10.63% 71.826%,
    11.614% 79.141%,
    12.636% 85.403%,
    13.692% 90.587%,
    14.777% 94.665%,
    15.885% 97.611%,
    17.013% 99.398%,
    18.154% 100%,
    45.153% 100%,
    46.392% 100%,
    47.632% 100%,
    81.846% 100%,
    82.987% 99.398%,
    84.115% 97.611%,
    85.223% 94.665%,
    86.308% 90.587%,
    87.364% 85.403%,
    88.386% 79.141%,
    89.37% 71.826%,
    90.31% 63.486%,
    91.203% 54.147%,
    92.042% 43.836%,
    92.042% 43.836%,
    92.697% 35.788%,
    93.393% 28.499%,
    94.128% 21.989%,
    94.895% 16.28%,
    95.693% 11.393%,
    96.517% 7.347%,
    97.364% 4.164%,
    98.229% 1.864%,
    99.109% 0.47%,
    100% 0%,
    47.632% 0%,
    46.392% 0%,
    45.153% 0%
  );
  clip-rule: evenodd;
`;

export const ItemButton = styled.button`
  font-family: 'Onest';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 0%;

  display: flex;
  align-items: center;

  color: ${({ isHovered }) => (isHovered ? '#FFFFFF' : '#0f4131')};
  cursor: pointer;

  background-color: transparent;
  border: 0;

  transition: color 0.3s ease-in-out;
`;

export const ServiceItemLink = styled.div`
  width: 406px;
  height: 460px;

  background: #ffffff;
  box-shadow: 0px 4px 41.4px rgba(0, 0, 0, 0.12);
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  cursor: pointer;
`;

export const ImgItem = styled.img`
  width: 366px;
  height: 219px;

  border-radius: 20px 24px 24px 24px;
`;

export const TextItemBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextItem = styled.p`
  width: 279px;
  font-family: 'Onest';
  font-style: normal;
  font-weight: 700;
  font-size: 47.8654px;
  line-height: 87%;
  text-transform: uppercase;
  color: #0f4131;
  margin: 48px 26px 0 0;
`;

export const ArrowItemButton = styled(FaArrowRight)`
  width: 9px;
  height: 9px;

  padding-left: 10px;

  color: ${({ isHovered }) => (isHovered ? '#FFFFFF' : '#0f4131')};
`;

export const ArrowItem = styled(FaArrowRight)`
  width: 41px;
  height: 41px;

  color: #0f4131;
`;
