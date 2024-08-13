import styled from 'styled-components'
import Logo from '../../reusableUi/Logo.jsx'
import LoginForm from './LoginForm.jsx'

const LoginpageStyled = styled.div`
    background-color: #eca5f1e8;
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
