import styled from 'styled-components'
import Logo from '../../reusableUi/Logo.jsx'
import LoginForm from './LoginForm.jsx'
import burgerImg from '../../../assets/img/burgerBackground .jpg'

const LoginpageStyled = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url(${burgerImg});
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function Loginpage() {
    //1- State(Données)
    //2- Comportements
    //3- Affichage(render)
    return (
        <LoginpageStyled>
            <Logo />
            <LoginForm />
        </LoginpageStyled>
    )
}
export default Loginpage
