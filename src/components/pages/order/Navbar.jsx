import styled from 'styled-components';
import NavbarRight from './NavbarRight';
import Logo from '../../reusableUi/Logo.jsx';
import { Link } from 'react-router-dom';
import theme from '../../../theme/index.js';

const NavbarStyled = styled.nav`
    background: ${theme.colors.white};
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
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
`;
function Navbar({ username }) {
    return (
        <NavbarStyled>
            <Logo />
            <NavbarRight username={username} />
        </NavbarStyled>
    );
}
export default Navbar;
