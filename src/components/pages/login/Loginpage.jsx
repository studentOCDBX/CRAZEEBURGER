import { useState } from 'react'

function Loginpage() {
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
    //1- Affichage(render)
    return (
        <div>
            <h1>Bienvenue chez nous!</h1>
            <br />
            <h2>Connectez-vous</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input
                    value={username}
                    type="text"
                    placeholder="Entrer votre prenom..."
                    required
                    onChange={handleChange}
                />
                <button>Accédez à votre espace</button>
            </form>
        </div>
    )
}
export default Loginpage
