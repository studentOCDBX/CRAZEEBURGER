import styled from 'styled-components';
import UserProfile from './UserProfile.jsx';

const NavbarRightStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: 50px;
`;
function NavbarRight({ username }) {
    return (
        <NavbarRightStyled>
            {/* <div className="nav_right_inner__left">AdminBtn</div> */}
            <UserProfile username={username} />
        </NavbarRightStyled>
    );
}
export default NavbarRight;
