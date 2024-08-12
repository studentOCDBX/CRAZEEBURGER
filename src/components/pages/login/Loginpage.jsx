function Loginpage() {
    return (
        <div>
            <h1>Bienvenue chez nous!</h1>
            <br />
            <h2>Connectez-vous</h2>
            <form action="submit">
                <input
                    type="text"
                    placeholder="Entrer votre prenom..."
                    required
                />
                <button>Accédez à votre espace</button>
            </form>
        </div>
    )
}
export default Loginpage
