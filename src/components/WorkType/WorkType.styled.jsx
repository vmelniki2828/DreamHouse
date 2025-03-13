import styled from 'styled-components';
import imgIcon from '../../images/Check_Circle.png';
import { MdCancel } from 'react-icons/md';

export const WorkTypeContainer = styled.div`
  padding: 0 40px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WorkTypeMainTitle = styled.div`
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

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
    margin-bottom: 24px;
  }
`;

export const QuestionTitleItem = styled.h2`
  max-width: 1320px;

  font-family: 'Onest';
  font-style: normal;
  font-weight: 700;
  font-size: 67px;
  line-height: 105.91%;
  text-transform: uppercase;

  color: #0f4131;

  margin: 0 0 60px 0px;

  @media (max-width: 1024px) {
    font-size: 64px;
    line-height: 94%;

    width: 622px;
  }

  @media (max-width: 768px) {
    display: flex;

    width: 296px;

    font-size: 30.6815px;
    line-height: 105.91%;
    text-align: center;
  }
`;

export const WorkTypeItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const WorkTypeFirstBlock = styled.div`
  width: 677px;
  height: 436px;

  border-radius: 25.9869px;
  background: #0f4131;

  padding: 60px;

  position: relative;

  @media (max-width: 1024px) {
    width: 532px;
    height: 365.92px;
    padding: 45px;
  }

  @media (max-width: 768px) {
    width: 288px;
    height: 479px;

    padding: 30px 20px 20px 20px;
  }
`;

export const WorkTypeSecBlock = styled.div`
  width: 424px;
  height: 455px;

  background: #ffffff;
  border: 1.08279px solid #065b2a;
  border-radius: 25.9869px;

  padding: 60px 20px 40px 43px;

  @media (max-width: 1024px) {
    width: 540px;
    height: 272px;
    padding: 40px;
  }

  @media (max-width: 768px) {
    width: 288px;
    height: 328.27px;
    padding: 35px 25px 35px 25px;
  }
`;

export const MainBlockText = styled.h3`
  font-family: 'Geologica';
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 54px;

  color: #ffffff;

  margin: 0 0 7px 0;

  @media (max-width: 1024px) {
    font-size: 32.7779px;
  }

  @media (max-width: 768px) {
    font-size: 42px;
    line-height: 54px;
  }
`;

export const BlockText = styled.p`
  font-family: 'Geologica';
  font-style: normal;
  font-weight: 400;
  font-size: 19.4902px;
  line-height: 32px;

  color: #ffffff;

  width: 507px;
  margin: 0 0 30px 0;

  @media (max-width: 1024px) {
    font-size: 15.2106px;
    line-height: 25px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;

    width: 248px;
  }
`;

export const ListBlock = styled.ul`
  padding: 0;
  margin: 0;

  margin: 0 0 41px 0;
`;

export const ItemBlock = styled.li`
  font-family: 'Geologica';
  font-style: normal;
  font-weight: 600;
  font-size: 19.4902px;
  line-height: 19px;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 17px;

  &::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 28px;
    background-image: url(${imgIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    font-size: 15.2106px;
    line-height: 15px;
  }

  @media (max-width: 768px) {
    font-size: 18.653px;
    line-height: 19px;
  }
`;

export const BlockButton = styled.button`
  background: #ffffff;
  border: 2px solid #065b2a;
  box-shadow: 0px 0px 39.9px rgba(0, 255, 128, 0.42);
  border-radius: 43.3115px;

  width: 334px;
  height: 72px;

  font-family: 'Geologica';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 19px;

  text-align: center;
  text-transform: uppercase;

  color: #065b2a;

  cursor: pointer;

  @media (max-width: 1024px) {
    width: 248px;
    height: 72px;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    display: block;
  }
`;

export const ImageBlock = styled.img`
  position: absolute;
  width: 396px;
  height: 387px;

  bottom: 0;
  right: 0;

  mix-blend-mode: luminosity;
  opacity: 0.57;

  @media (max-width: 1024px) {
    width: 308.93px;
    height: 302.14px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainSecBlockText = styled.h3`
  font-family: 'Geologica';
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 54px;

  color: #0f4131;

  margin: 0 0 9px 0;

  @media (max-width: 1024px) {
    font-size: 32.7239px;
    line-height: 42px;
  }

  @media (max-width: 768px) {
    font-size: 24.7362px;
    line-height: 32px;
  }
`;

export const SecBlockText = styled.p`
  width: 426px;

  font-family: 'Geologica';
  font-style: normal;
  font-weight: 400;
  font-size: 19.4902px;
  line-height: 32px;

  color: #0f4131;

  margin: 0 0 26px 0;

  @media (max-width: 1024px) {
    font-size: 15.1856px;
    line-height: 25px;

    width: 331.91px;
  }

  @media (max-width: 768px) {
    font-size: 11.4789px;
    line-height: 19px;

    width: 250.9px;
  }
`;

export const ListSecBlock = styled.ul`
  padding: 0;
  margin: 0;

  margin: 0 0 41px 0;

  list-style: none;

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    margin: 0 0 25px 0;
    display: block;
  }
`;

export const ListSecBlockTab = styled.ul`
  display: none;

  @media (max-width: 1024px) {
    padding: 0;
    margin: 0;
    list-style: none;
    margin: 0 0 30px 0;

    display: flex;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ItemTabBlock = styled.div`
  margin-right: 4px;
`;

export const ItemSecBlock = styled.li`
  font-family: 'Geologica';
  font-style: normal;
  font-weight: 200;
  font-size: 19.4902px;
  line-height: 19px;

  color: #0f4131;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 17px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    font-size: 14.6719px;
    line-height: 15px;
  }

  @media (max-width: 768px) {
    font-size: 11.4789px;
    line-height: 11px;
  }
`;

export const BlockSecButton = styled.button`
  width: 284px;
  height: 72px;

  background: #ffffff;
  border: 2px solid #a4c9b3;
  border-radius: 43.3115px;

  font-family: 'Geologica';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;

  color: #a3d1b6;

  cursor: pointer;

  @media (max-width: 1024px) {
    width: 221.28px;
    height: 56.1px;

    font-size: 17.1411px;
    line-height: 15px;
  }

  @media (max-width: 768px) {
    width: 167.26px;
    height: 42.4px;

    font-size: 12.9571px;
    line-height: 11px;

    color: #a3d1b6;
  }
`;

export const ListIcon = styled(MdCancel)`
  width: 28px;
  height: 28px;

  color: #a3d1b6;
`;
