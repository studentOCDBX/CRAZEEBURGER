import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../theme/index.js';

const NavbarRightStyled = styled.div`
    background: #326bfa;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .nav_right_inner__right {
        background: #5f0fcf;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 50px;
    }
    .userDescription {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: ${theme.colors.greyBlue};
        p {
            margin: 0;
            text-align: start;
            font-size: 16px;
            line-height: 22px;
        }
        span {
            font-weight: 700;
            color: ${theme.colors.primary};
        }
        a {
            text-align: start;
            font-weight: 400;
            font-size: 10px;
            line-height: 14px;
            text-decoration: none;
        }
        a:hover {
            border-bottom: 1px solid ${theme.colors.greyBlue};
        }
    }

    .userImgContainer {
        display: flex;
        align-items: center;
        .personIcone {
            color: ${theme.colors.greyBlue};
            width: ${theme.fonts.size.P4};
            height: ${theme.fonts.size.P4};
        }
    }
`;
function NavbarRight({ username }) {
    return (
        <NavbarRightStyled>
            {/* <div className="nav_right_inner__left">AdminBtn</div> */}
            <div className="nav_right_inner__right">
                <div className="userDescription">
                    <p>
                        Hey, <span>{username}</span>{' '}
                    </p>
                    <Link to="/">
                        <p>Se déconnecter</p>
                    </Link>
                </div>
                <div className="userImgContainer">
                    <BsPersonCircle className="personIcone" />
                </div>
            </div>
        </NavbarRightStyled>
    );
}
export default NavbarRight;
