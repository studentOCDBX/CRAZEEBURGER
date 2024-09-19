import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../../theme/index.js';
const UserProfileStyled = styled.div`
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    .userDescription {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
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
            text-decoration: none;
        }
        a p {
            text-align: start;
            font-weight: 400;
            font-size: 10px;
            line-height: 14px;
        }

        a:hover {
            border-bottom: 1px solid ${theme.colors.greyBlue};
        }
        a:visited {
            color: ${theme.colors.greyBlue};
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
function UserProfile({ username }) {
    return (
        <UserProfileStyled>
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
        </UserProfileStyled>
    );
}
export default UserProfile;
