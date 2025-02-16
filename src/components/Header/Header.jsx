import { HeaderMainContainer } from './Header.styled';
import HeaderHero from './HeaderHero/HeaderHero';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const Header = () => {
  return (
    <HeaderMainContainer>
      <HeaderMenu />
      <HeaderHero />
    </HeaderMainContainer>
  );
};

export default Header;
