import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../../theme/index.js';

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

    nav {
        background: #47ddeb;
        width: 100%;
        height: 8vh;
        display: grid;
        grid-template-columns: 50% 50%;
        column-gap: 8px;
        justify-content: center;
        align-items: center;
    }
    .nav__left {
        text-align: center;
    }
    .nav__right {
        display: grid;
        grid-template-columns: 40% 60%;
        justify-content: center;
        align-items: center;
    }

    .nav_right_inner__right {
        /* display: flex;
        justify-content: center;
        align-items: center; */
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        align-items: center;
    }
    .userInfos,
    .userImgContainer {
        width: 50%;
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
            {/* <h1>Bonjour {username} </h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link> */}
            <div className="container">
                <nav>
                    <div className="nav__left">Logo</div>
                    <div className="nav__right">
                        <div className="nav_right_inner__left">AdminBtn</div>
                        <div className="nav_right_inner__right">
                            <div className="userInfos">
                                <h1>Bonjour {username} </h1>
                                <Link to="/">
                                    <button>Déconnexion</button>
                                </Link>
                            </div>
                            <div className="userImgContainer">Userimg</div>
                        </div>
                    </div>
                </nav>
                <main>Main</main>
            </div>
        </OrderPageSyled>
    );
}
export default OrderPage;
