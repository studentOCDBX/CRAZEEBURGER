import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../theme/index.js';
import Main from './Main/Main.jsx';
import Navbar from './NavBar/Navbar.jsx';

const OrderPageSyled = styled.div`
    background: ${theme.colors.primary};
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        width: 90%;
        max-width: 1400px;
        height: 95vh;
        display: flex;
        flex-direction: column;
    }
`;

function OrderPage() {
    //1- State(Données)
    const { username } = useParams();

    //2- Comportements
    //3- Affichage(render)

    return (
        <OrderPageSyled>
            <div className="container">
                <Navbar username={username} />
                <Main />
            </div>
        </OrderPageSyled>
    );
}
export default OrderPage;
