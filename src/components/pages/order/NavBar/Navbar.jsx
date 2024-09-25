import NavbarRight from './NavbarRight';
import styled from 'styled-components';
import Logo from '../../../reusableUi/Logo.jsx';
import theme from '../../../../theme/index.js';
import { refreshPage } from '../../../../utils/window.js';

const NavbarStyled = styled.nav`
    background: ${theme.colors.white};
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    border-bottom: 1px solid ${theme.colors.greyLight};
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .nav__left {
        text-align: center;
    }
    a {
        text-decoration: none;
    }
    .navbar_logo {
        cursor: pointer;
    }
`;
function Navbar({ username }) {
    return (
        <NavbarStyled>
            <Logo className="navbar_logo" onClick={refreshPage} />
            <NavbarRight username={username} />
        </NavbarStyled>
    );
}
export default Navbar;
