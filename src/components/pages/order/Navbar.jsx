import styled from 'styled-components';
import NavbarRight from './NavbarRight';
import Logo from '../../reusableUi/Logo.jsx';

const NavbarStyled = styled.nav`
    background: #47ddeb;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .nav__left {
        text-align: center;
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
