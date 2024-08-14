import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../../../theme/index.js'
import { BsPersonCircle } from 'react-icons/bs'
import { IoChevronForward } from 'react-icons/io5'

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
            border: none;
        }
    }
    button {
        width: 400px;
        height: 53px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.white};
        font-family: 'Arial', sans-serif;
        font-weight: 700;
        font-size: 15px;
        line-height: 15px;
        border-radius: 5px;
        background: ${theme.colors.primary_burger};
        & .chevronIcon {
            width: 15px;
            height: 15px;
            margin-left: 10px;
        }
        &:hover {
            border: 1px solid ${theme.colors.primary_burger};
            background: ${theme.colors.white};
            color: ${theme.colors.primary_burger};
            cursor: pointer;
        }
        &:active {
            border: 1px solid ${theme.colors.primary_burger};
            background: ${theme.colors.primary_burger};
            color: ${theme.colors.white};
            cursor: pointer;
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
            <button>
                Accédez à mon espace{' '}
                <IoChevronForward className="chevronIcon" />
            </button>
        </LoginFormStyled>
    )
}
export default LoginForm
