import styled from 'styled-components';
import UserProfile from './UserProfile.jsx';
import ToggleButton from '../../../reusableUi/ToggleButton.jsx';

const NavbarRightStyled = styled.div`
    width: 430px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 50px;
    column-gap: 10px;
`;
function NavbarRight({ username }) {
    return (
        <NavbarRightStyled>
            <ToggleButton
                labelIfUnchecked="Activer le mode admin"
                labelIfChecked="Desactiver le mode admin"
            />
            <UserProfile username={username} />
        </NavbarRightStyled>
    );
}
export default NavbarRight;
