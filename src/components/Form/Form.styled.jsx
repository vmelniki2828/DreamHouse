import styled from 'styled-components';
import { MdMailOutline } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import { BsFillGeoAltFill } from 'react-icons/bs';

export const FormConteiner = styled.div`
  padding: 0 40px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FromFlexConteiner = styled.div`
  display: flex;

  align-items: self-end;
  justify-content: center;

  gap: 54px;

  @media (max-width: 1350px) {
    align-items: center;
    gap: 26px;
  }
`;

export const FormMainTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 215px;
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

  text-transform: uppercase;

  @media (max-width: 1350px) {
    display: none;
  }

  @media (max-width: 680px) {
    display: flex;
    margin-bottom: 25px;
  }
`;

export const AddressBlock = styled.div`
  @media (max-width: 680px) {
    display: none;
  }
`;

export const FormBlock = styled.div`
  width: 595.3px;
  height: 590.65px;
  background: #bddac9;
  border-radius: 27.4066px;
  padding: 71px 43px 86px 43px;

  @media (max-width: 1350px) {
    width: 277.97px;
    height: 279.04px;

    padding: 33px 20px 40px 20px;
  }

  @media (max-width: 680px) {
    width: 248px;
    height: 836px;

    padding: 20px;
  }
`;

export const MainAddressText = styled.h3`
  font-family: 'Geologica';
  font-style: normal;
  font-weight: 700;
  font-size: 19.7328px;
  line-height: 22px;

  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #0f4131;

  margin: 0 0 8px 0;

  @media (max-width: 1350px) {
    font-size: 9.29129px;
    line-height: 10px;

    margin: 0 0 3px 0;
  }
`;

export const MainSecAddressText = styled.h4`
  font-family: 'Geologica';
  font-style: normal;
  font-weight: 600;
  font-size: 48.2357px;
  line-height: 55px;

  color: #0f4131;

  margin: 0 0 17px 0;

  @media (max-width: 1350px) {
    font-size: 22.712px;
    line-height: 26px;

    margin: 0 0 8px 0;
  }
`;

export const AddressText = styled.p`
  width: 532px;

  font-family: 'Geologica';
  font-style: normal;
  font-weight: 400;
  font-size: 19.7328px;
  line-height: 33px;

  color: #84a491;

  margin: 0 0 44px 0;

  @media (max-width: 1350px) {
    font-size: 13px;
    line-height: 15px;

    width: 250.86px;

    margin: 0 0 21px 0;
  }
`;

export const ContactMainText = styled.p`
  font-family: 'Geologica';
  font-style: normal;
  font-weight: 700;
  font-size: 19.7328px;
  line-height: 22px;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #0f4131;

  margin: 0 0 23px 0px;

  @media (max-width: 1350px) {
    font-size: 9.29129px;
    line-height: 10px;

    margin: 0 0 9px 0px;
  }
`;

export const ContactList = styled.ul`
  padding: 0;
  margin: 0;

  margin: 0 0 54px 0;

  list-style: none;

  @media (max-width: 1350px) {
    display: none;
  }
`;

export const ContactListTabFirst = styled.ul`
  display: none;

  @media (max-width: 1350px) {
    padding: 0;
    margin: 0;

    display: flex;
    align-items: baseline;

    margin: 0;

    list-style: none;

    gap: 77px;
  }
`;

export const ContactListTabSec = styled.ul`
  display: none;

  @media (max-width: 1350px) {
    padding: 0;
    margin: 0;

    display: flex;
    align-items: baseline;

    margin: 0;

    list-style: none;

    gap: 133px;
  }
`;

export const ContactItem = styled.li`
  font-family: 'Geologica';
  font-style: normal;
  font-weight: 300;
  font-size: 19.7328px;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 26px;

  color: #0f4131;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1350px) {
    font-size: 9.29129px;
    line-height: 9px;
    margin-bottom: 12px;
  }
`;

export const ContactItemAdress = styled.li`
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 17px;

  color: #0f4131;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContactSpan = styled.span`
  width: 193.72px;

  font-family: 'Geologica';
  font-style: normal;
  font-weight: 300;
  font-size: 19.7328px;
  line-height: 20px;

  @media (max-width: 1350px) {
    font-size: 9.29129px;
    line-height: 9px;

    width: 91.21px;
  }
`;

export const MessegeIcon = styled(MdMailOutline)`
  width: 18px;
  height: 18px;

  @media (max-width: 1350px) {
    width: 10px;
    height: 10px;
  }
`;

export const PhoneIcon = styled(FaPhone)`
  width: 18px;
  height: 18px;

  @media (max-width: 1350px) {
    width: 10px;
    height: 10px;
  }
`;

export const GeoIcon = styled(BsFillGeoAltFill)`
  width: 18px;
  height: 18px;
  @media (max-width: 1350px) {
    width: 10px;
    height: 10px;
  }
`;

export const ConteinerMap = styled.div``;

export const Map = styled.iframe`
  background-blend-mode: luminosity, normal;
  border-radius: 27.4066px;

  width: 589px;
  height: 233px;

  border: 0;

  @media (max-width: 1350px) {
    width: 277px;
    height: 200px;
  }
`;

export const StyledTopBlock = styled.div`
  position: absolute;
  width: 589px;
  height: 233px;
  background: rgba(208, 241, 224, 0.2);
  background-blend-mode: luminosity, normal;
  border-radius: 27.4px;
  pointer-events: none;
  z-index: 1;

  @media (max-width: 1350px) {
    width: 277px;
    height: 200px;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #2f4f30;
  margin-bottom: 13px;

  font-family: 'Geologica';
  font-style: normal;
  font-weight: 600;
  font-size: 19.7328px;
  line-height: 20px;

  color: #0f4131;

  @media (max-width: 1350px) {
    font-size: 9.29129px;
    line-height: 9px;

    margin-bottom: 6px;
  }

  @media (max-width: 680px) {
    font-size: 19.7328px;
    line-height: 20px;

    margin-bottom: 13px;
  }
`;

export const Input = styled.input`
  padding-left: 26px;
  border: none;
  outline: none;
  font-size: 19.7328px;

  background: #ffffff;
  border-radius: 54.8133px;

  width: 254.64px;
  height: 78.93px;

  font-family: 'Geologica';
  font-style: normal;
  font-weight: 300;

  line-height: 20px;

  color: #84a491;

  @media (max-width: 1350px) {
    width: 118.14px;
    height: 35.17px;

    padding-left: 12px;

    font-size: 9.29129px;
    line-height: 9px;
  }

  @media (max-width: 680px) {
    width: 219px;
    height: 66px;

    padding-left: 22px;

    font-size: 17.111px;
    line-height: 17px;
  }
`;

export const Textarea = styled.textarea`
  border: none;
  outline: none;
  font-size: 14px;
  background: white;
  resize: none;

  font-family: 'Geologica';
  font-style: normal;
  font-weight: 300;
  font-size: 19.7328px;
  line-height: 20px;

  color: #84a491;

  padding: 26px;

  width: 535.6px;
  height: 103.94px;

  border-radius: 21.9253px;

  @media (max-width: 1350px) {
    padding: 12px;

    width: 252.67px;
    height: 50.01px;

    font-size: 9.29129px;
    line-height: 9px;
  }

  @media (max-width: 680px) {
    width: 209px;
    height: 178px;

    padding-left: 22px;

    font-size: 17.111px;
    line-height: 17px;
  }
`;

export const Button = styled.button`
  background-color: #0b3d26;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;

  width: 259.93px;
  height: 72.62px;

  border-radius: 43.8506px;

  font-family: 'Geologica';
  font-style: normal;
  font-weight: 600;
  font-size: 19.7328px;
  line-height: 20px;

  text-align: center;

  color: #ffffff;

  margin-top: 35px;

  @media (max-width: 1350px) {
    width: 122.17px;
    height: 34.78px;

    font-size: 9.29129px;
    line-height: 9px;

    color: #ffffff;

    margin-top: 16px;
  }

  @media (max-width: 680px) {
    width: 243px;
    height: 68px;

    display: block;

    font-size: 17.111px;
    line-height: 17px;
    margin: 23px auto;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 15px;

  margin-bottom: 35px;

  @media (max-width: 1350px) {
    margin-bottom: 16px;
  }

  @media (max-width: 680px) {
    margin-bottom: 22px;
    flex-direction: column;
  }
`;

export const Column = styled.div`
  flex: 1;
`;
