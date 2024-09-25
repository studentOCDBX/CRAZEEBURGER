import styled from 'styled-components';
import UserProfile from './UserProfile.jsx';
import ToggleButton from '../../../reusableUi/ToggleButton.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../../../../theme/index.js';
import { FaUserSecret } from 'react-icons/fa';
import { useState } from 'react';

const NavbarRightStyled = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 50px;
    column-gap: 10px;

    .toaster {
        max-width: 300px;
    }

    .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
        background: ${theme.colors.background_dark};
    }

    .body-toast {
        .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
            margin-right: 20px;
            margin-left: 5px;
        }
        div {
            line-height: 1.3em;
        }
    }
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
            <ToastContainer className=" toaster" bodyClassName="body-toast" />
            <ToggleButton
                onToggle={displayToastNotification}
                labelIfUnchecked="Activer le mode admin"
                labelIfChecked="Desactiver le mode admin"
            />
            <UserProfile username={username} />
        </NavbarRightStyled>
    );
}
export default NavbarRight;
