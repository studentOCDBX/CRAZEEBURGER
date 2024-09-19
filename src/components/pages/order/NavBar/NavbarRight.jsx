import styled from 'styled-components';
import UserProfile from './UserProfile.jsx';

const NavbarRightStyled = styled.div`
    width: 430px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 50px;
    column-gap: 10px;
    .nav_right_inner__left {
        position: relative;
        background: green;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 200px;
        height: 40px;
        border-radius: 30px;
        /* border: 2px; */
        padding: 8px 5px;
        /* 
        .circle {
            width: 30px;
            height: 30px;
            border-radius: 15px;
            background: #000;
        }
        p {
            font-size: 10px;
        } */
        ::before {
            content: '';
            position: absolute;
            background: #ffa01b;
            width: 30px;
            height: 30px;
            top: 5px;
            left: 5px;
            bottom: 5px;
            /* transform: translateY(-5%); */
            transform: translateY(5px -5%);
            border-radius: 15px;
        }
    }
`;
function NavbarRight({ username }) {
    return (
        <NavbarRightStyled>
            <div className="nav_right_inner__left">
                {/* <div className="circle"></div> */}
                <p>activer le mode admin</p>
            </div>
            <UserProfile username={username} />
        </NavbarRightStyled>
    );
}
export default NavbarRight;
