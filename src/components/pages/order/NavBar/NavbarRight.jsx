import styled from 'styled-components';
import UserProfile from './UserProfile.jsx';
import ToggleButton from '../../../reusableUi/ToggleButton.jsx';
import { FaUserSecret } from 'react-icons/fa';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import AdminToast from './AdminToast.jsx';
import { toast } from 'react-toastify';

const NavbarRightStyled = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 50px;
    column-gap: 10px;
`;
function NavbarRight({ username }) {
    const [isModeAdmin, setIsModeAdmin] = useState(false);

    const displayToastNotification = () => {
        if (!isModeAdmin) {
            toast.success('Mode admin activé', {
                icon: <FaUserSecret size={30} />,
                theme: 'dark',
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        setIsModeAdmin(!isModeAdmin);
    };

    return (
        <NavbarRightStyled>
            <ToggleButton
                onToggle={displayToastNotification}
                labelIfUnchecked="Activer le mode admin"
                labelIfChecked="Desactiver le mode admin"
            />
            <AdminToast />
            <UserProfile username={username} />
        </NavbarRightStyled>
    );
}
export default NavbarRight;
