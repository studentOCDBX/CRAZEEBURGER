import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavbarRight from './NavbarRight';

const NavbarStyled = styled.nav`
    background: #47ddeb;
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav__left {
        text-align: center;
    }
`;
function Navbar({ username }) {
    return (
        <NavbarStyled>
            <div className="nav__left">Logo</div>
            <NavbarRight username={username} />
        </NavbarStyled>
    );
}
export default Navbar;
