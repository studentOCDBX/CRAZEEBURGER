import { useState } from 'react'

function LoginForm() {
    //1- State(Données)
    const [username, setUsername] = useState('')
    //2- Comportements
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Bonjour ${username} `)
        setUsername('')
    }
    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    //3- Affichage(render)
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous!</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input
                value={username}
                type="text"
                placeholder="Entrer votre prenom..."
                required
                onChange={handleChange}
            />
            <button>Accédez à votre espace</button>
        </form>
    )
}
export default LoginForm
