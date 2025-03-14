import styled from 'styled-components';

export const FooterConteiner = styled.div`
  padding: 49px 59px;

  background: #ffffff;

  box-shadow: 0px -2px 20.7px rgba(0, 0, 0, 0.05);

  @media (max-width: 1280px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const FooterDestopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1280px) {
    gap: 222px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const FooterText = styled.p`
  font-family: 'Geologica';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 18px;

  color: #7ba48c;

  text-align: center;

  margin: 0;
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

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const SocialMediaBlockTab = styled.ul`
  display: none;

  @media (max-width: 1280px) {
    list-style: none;

    margin: 0;

    padding: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SocialMediaBlockMob = styled.ul`
  list-style: none;

  margin: 0;

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    display: none;
  }
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

export const LogoImageMob = styled.img`
  width: 56px;
  height: 64px;

  color: black;

  margin-bottom: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const FooterSpan = styled.span`
  text-decoration: underline;

  color: #7ba48c;
`;
