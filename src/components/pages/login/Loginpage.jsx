import styled from 'styled-components';
import Logo from '../../reusableUi/Logo.jsx';
import LoginForm from './LoginForm.jsx';
import burgerImg from '../../../assets/img/burgerBackground .jpg';
import theme from '../../../theme/index.js';

const LoginpageStyled = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url(${burgerImg});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .loginPage__logo {
        transform: scale(2.5);
        margin-bottom: ${theme.gridUnit * 9}px;
    }
`;

function Loginpage() {
    //1- State(Données)
    //2- Comportements
    //3- Affichage(render)
    return (
        <LoginpageStyled>
            <Logo className={'loginPage__logo'} />
            <LoginForm />
        </LoginpageStyled>
    );
}
export default Loginpage;
