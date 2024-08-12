import { Link, useParams } from 'react-router-dom'

function OrderPage() {
    //1- State(Données)
    const { username } = useParams()

    //2- Comportements
    //3- Affichage(render)

    return (
        <div>
            <h1>Bonjour {username} </h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </div>
    )
}
export default OrderPage
