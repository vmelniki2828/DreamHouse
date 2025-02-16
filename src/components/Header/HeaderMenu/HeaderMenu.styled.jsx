import styled from 'styled-components';

export const HeaderMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CurvedDiv = styled.div`
  width: 100%;
  max-width: 702px;
  height: 80px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  clip-path: polygon(
    45.153% 0%,
    46.392% 0%,
    47.632% 0%,
    100% 0%,
    100% 0%,
    99.109% 0.47%,
    98.229% 1.864%,
    97.364% 4.164%,
    96.517% 7.347%,
    95.693% 11.393%,
    94.895% 16.28%,
    94.128% 21.989%,
    93.393% 28.499%,
    92.697% 35.788%,
    92.042% 43.836%,
    92.042% 43.836%,
    91.203% 54.147%,
    90.31% 63.486%,
    89.37% 71.826%,
    88.386% 79.141%,
    87.364% 85.403%,
    86.308% 90.587%,
    85.223% 94.665%,
    84.115% 97.611%,
    82.987% 99.398%,
    81.846% 100%,
    47.632% 100%,
    46.392% 100%,
    45.153% 100%,
    18.154% 100%,
    18.154% 100%,
    17.013% 99.398%,
    15.885% 97.611%,
    14.777% 94.665%,
    13.692% 90.587%,
    12.636% 85.403%,
    11.614% 79.141%,
    10.63% 71.826%,
    9.69% 63.486%,
    8.797% 54.147%,
    7.958% 43.836%,
    7.958% 43.836%,
    7.303% 35.788%,
    6.607% 28.499%,
    5.873% 21.989%,
    5.105% 16.28%,
    4.307% 11.393%,
    3.483% 7.347%,
    2.636% 4.164%,
    1.771% 1.864%,
    0.891% 0.47%,
    0% 0%,
    45.153% 0%
  );
  clip-rule: evenodd;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin: 0 105px 0 276px;
`;
export const InCurvedDiv = styled.div`
  width: 480px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const LogoImg = styled.img`
  width: 32px;
  height: 37.11px;
`;

export const NavItem = styled.a`
  font-family: 'Onest', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 17.9175px;
  line-height: 18.98px;
  text-decoration: none;
  color: #000000;
`;

export const HeaderButton = styled.button`
  width: 190px;
  height: 44px;
  background-color: #4caf50; /* Цвет фона кнопки */
  border: none;
  border-radius: 30px; /* Скругление углов кнопки */
  color: white;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  /* Маска для вырезания прямоугольника 185x40 с закругленными углами */
  mask-image: linear-gradient(
      to right,
      transparent 0 10px,
      black 10px,
      black 175px,
      transparent 175px
    ),
    linear-gradient(
      to bottom,
      transparent 0 2px,
      black 2px,
      black 38px,
      transparent 38px
    );
  -webkit-mask-image: linear-gradient(
      to right,
      transparent 0 10px,
      black 10px,
      black 175px,
      transparent 175px
    ),
    linear-gradient(
      to bottom,
      transparent 0 2px,
      black 2px,
      black 38px,
      transparent 38px
    );
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
`;

export const ImageBlock = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const ButtonImage = styled.img`
  width: 190px;
  height: 42px;
`;

export const ImageInside = styled.div`
  position: absolute;
  top: 50%;
  left: 78px;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;

  font-family: 'Onest', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 105.91%;
  text-align: center;
  width: 130px;

  color: #ffffff;
`;

export const ImageButtonArrow = styled.img`
  position: absolute;
  top: 50%;
  right: 9px;
  transform: translateY(-50%);
`;
