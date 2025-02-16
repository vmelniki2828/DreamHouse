import styled from 'styled-components';

export const HeroMainContainer = styled.div`
  margin-top: 148px;
`;

export const HeroTitle = styled.h2`
  font-family: 'Onest', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 105.91%;
  margin: 0 0 100px 0;
  color: #ffffff;
`;

export const MainTitle = styled.h1`
  font-family: 'Onest', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 39px;
  line-height: 41.31px;
  text-transform: uppercase;
  margin: 0;
  color: #ffffff;
`;

export const MainTitleSpan = styled.span`
  font-family: 'Onest', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 81px;
  line-height: 72.9px;
  text-transform: uppercase;

  color: #ffffff;
`;

export const HeaderButtonItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;

export const HeaderHeroRightButton = styled.button`
  width: 87px;
  height: 87px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px dashed white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ButtonImageBig = styled.img`
  width: 221px;
  height: 44px;
`;

export const ImageInsideBig = styled.div`
  position: absolute;
  top: 50%;
  left: 93px;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: none;

  font-family: 'Onest', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 13.77px;
  text-align: center;
  width: 170px;

  color: #ffffff;
`;

export const ImageButtonArrowBig = styled.img`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`;
