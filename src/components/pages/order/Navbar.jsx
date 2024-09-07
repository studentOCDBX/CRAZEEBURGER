import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

    .nav__right {
        display: grid;
        grid-template-columns: 40% 60%;
        justify-content: center;
        align-items: center;
    }

    .nav_right_inner__right {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        align-items: center;
    }

    .userInfos,
    .userImgContainer {
        width: 50%;
    }
`;
function Navbar({ username }) {
    return (
        <NavbarStyled>
            <div className="nav__left">Logo</div>
            <div className="nav__right">
                {/* <div className="nav_right_inner__left">AdminBtn</div> */}
                {/* for next level */}
                <div className="nav_right_inner__right">
                    <div className="userInfos">
                        <h1>Bonjour {username} </h1>
                        <Link to="/">
                            <button>Déconnexion</button>
                        </Link>
                    </div>
                    <div className="userImgContainer">Userimg</div>
                </div>
            </div>
        </NavbarStyled>
    );
}
export default Navbar;
