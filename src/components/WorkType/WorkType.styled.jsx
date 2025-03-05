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
`;

export const QuestionTitleItem = styled.h2`
  width: 1320px;

  font-family: 'Onest';
  font-style: normal;
  font-weight: 700;
  font-size: 67px;
  line-height: 105.91%;
  text-transform: uppercase;

  color: #0f4131;

  margin: 0 0 60px 0px;
`;

export const WorkTypeItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`;

export const WorkTypeFirstBlock = styled.div`
  width: 677px;
  height: 436px;

  border-radius: 25.9869px;
  background: #0f4131;

  padding: 60px;

  position: relative;
`;

export const WorkTypeSecBlock = styled.div`
  width: 410px;

  background: #ffffff;
  border: 1.08279px solid #065b2a;
  border-radius: 25.9869px;

  padding: 60px 20px 40px 43px;
`;

export const MainBlockText = styled.h3`
  font-family: 'Geologica';
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 54px;

  color: #ffffff;

  margin: 0 0 7px 0;
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
`;

export const ImageBlock = styled.img`
  position: absolute;
  width: 396px;
  height: 387px;

  bottom: 0;
  right: 0;

  mix-blend-mode: luminosity;
  opacity: 0.57;
`;

export const MainSecBlockText = styled.h3`
  font-family: 'Geologica';
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 54px;

  color: #0f4131;

  margin: 0 0 9px 0;
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
`;

export const ListSecBlock = styled.ul`
  padding: 0;
  margin: 0;

  margin: 0 0 41px 0;

  list-style: none;
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
`;

export const ListIcon = styled(MdCancel)`
  width: 28px;
  height: 28px;

  color: #a3d1b6;
`;
