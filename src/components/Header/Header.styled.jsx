import styled from 'styled-components';
import header_bg from '../../images/header_bg.png';

export const HeaderMainContainer = styled.div`
  background-image: url(${header_bg});
  background-size: cover;
  background-position: center;
  height: 800px;
  overflow: hidden;
  padding: 0 40px;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 548px;
  }
`;
