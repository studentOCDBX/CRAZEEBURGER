import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../../theme/index.js'
import { BsPersonCircle } from 'react-icons/bs'

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
    .inputContainer {
        width: 400px;
        height: 55px;
        border-radius: ${theme.borderRadius.round};
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        background: ${theme.colors.white};
        margin-bottom: 18px;
        .personIcone {
            color: ${theme.colors.greyBlue};
            width: 15px;
            height: 15px;
        }
        & input {
            width: 324px;
            height: 19px;
        }
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
            <div className="inputContainer">
                <BsPersonCircle className="personIcone" />
                <input
                    value={username}
                    type="text"
                    placeholder="Entrer votre prenom"
                    required
                    onChange={handleChange}
                />
            </div>
            <button>Accédez à mon espace</button>
        </LoginFormStyled>
    )
}
export default LoginForm
