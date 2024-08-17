import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../../theme/index.js'
import { BsPersonCircle } from 'react-icons/bs'
import { IoChevronForward } from 'react-icons/io5'
import TextInput from '../../reusableUi/TextInput.jsx'
import PrimaryButton from '../../reusableUi/PrimaryButton.jsx'

const LoginFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    max-width: 500px;
    min-width: 400px;
    font-family: 'Amatic SC', cursive;
    font-weight: 700;
    h1 {
        font-size: ${theme.fonts.P5};
        line-height: 61px;
        text-align: center;
        margin-bottom: 32px;
    }
    hr {
        width: 400px;
        height: 3px;
        margin-bottom: 40px;
        border: 1px solid ${theme.colors.deepCarrotOrange};
        background: ${theme.colors.deepCarrotOrange};
    }
    h2 {
        font-size: ${theme.fonts.P4};
        line-height: 46px;
        text-align: center;
        margin-bottom: 18px;
    }
    & .chevronIcon {
        width: 15px;
        height: 15px;
        margin-left: 10px;
    }
`

function LoginForm() {
    //1- State(Données)
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    //2- Comportements
    const handleSubmit = (e) => {
        e.preventDefault()
        setUsername('')
        navigate(`order/${username}`)
    }
    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    //3- Affichage(render)
    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous!</h1>
            <hr />
            <h2>Connectez-vous</h2>
            <TextInput
                Icon={<BsPersonCircle className="personIcone" />}
                value={username}
                onChange={handleChange}
                placeholder={'Entrer votre prenom'}
                required
            />
            <PrimaryButton
                Label={'Accédez à mon espace'}
                Icon={<IoChevronForward className="chevronIcon" />}
            />
        </LoginFormStyled>
    )
}
export default LoginForm
