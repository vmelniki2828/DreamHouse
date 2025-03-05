import styled from 'styled-components';

export const FooterConteiner = styled.div`
  padding: 49px 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;

  background: #ffffff;
  box-shadow: 0px -2px 20.7px rgba(0, 0, 0, 0.05);
`;

export const FooterText = styled.p`
  font-family: 'Geologica';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 18px;

  color: #7ba48c;
`;

export const SocialMediaBlock = styled.ul`
  list-style: none;

  margin: 0;

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  margin-right: 300px;
  margin-left: 127px;
`;

export const SocialMediaItem = styled.li`
  width: 64px;
  height: 64px;
  background: #ffffff;
  box-shadow: 0px 3px 11.7px rgba(0, 0, 0, 0.11);
  border-radius: 10px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration-line: underline;
  color: #000000;
  justify-content: center;

  cursor: pointer;
`;

export const SocialMediaItemIcon = styled.li`
  width: 56px;
  height: 64px;

  margin-right: 30px;
  margin-left: 30px;
`;

export const LogoImage = styled.img`
  width: 56px;
  height: 64px;

  color: black;
`;

export const FooterSpan = styled.span`
  text-decoration: underline;

  color: #7ba48c;
`;
