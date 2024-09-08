import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    }
`;
function NavbarRight({ username }) {
    return (
        <NavbarRightStyled>
            {/* <div className="nav_right_inner__left">AdminBtn</div> */}
            <div className="nav_right_inner__right">
                <div className="userInfos">
                    <p>Hey, {username} </p>
                    <Link to="/">
                        <button>Se déconnecter</button>
                    </Link>
                </div>
                <div className="userImgContainer">Userimg</div>
            </div>
        </NavbarRightStyled>
    );
}
export default NavbarRight;
