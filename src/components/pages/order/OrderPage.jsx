import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../theme/index.js';
import Navbar from './Navbar.jsx';

const OrderPageSyled = styled.div`
    background: ${theme.colors.primary};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .container {
        width: 1400px;
        height: 95vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    main {
        width: 100%;
        background: #1de413;
        flex: 1; /* or we can use this too  height: calc(95vh - 8vh);
        without the parent in flexbox */
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
                <main>Main</main>
            </div>
        </OrderPageSyled>
    );
}
export default OrderPage;
