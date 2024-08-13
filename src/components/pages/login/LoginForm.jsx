import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const LoginFormStyled = styled.form`
    background-color: #9df38e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
            <br />
            <h2>Connectez-vous</h2>
            <input
                value={username}
                type="text"
                placeholder="Entrer votre prenom"
                required
                onChange={handleChange}
            />
            <button>Accédez à mon espace</button>
        </LoginFormStyled>
    )
}
export default LoginForm
