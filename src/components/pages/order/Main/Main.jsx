import styled from 'styled-components';
import theme from '../../../../theme/index.js';
import Menu from './Menu.jsx';

const MainStyled = styled.main`
    background: ${theme.colors.background_white};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    flex: 1; /* or we can use this too  height: calc(95vh - 8vh);
        without the parent in flexbox */
    display: grid;
    /* This code will be use for orderBasket */
    /* grid-template-columns: 25% 1fr; */
    grid-template-columns: 1fr;
    overflow-y: scroll;
    .orderBasket {
        background: #6efaf1;
    }
`;
function Main() {
    return (
        <MainStyled>
            {/* <div className="orderBasket">Basket</div> */}
            <Menu />
        </MainStyled>
    );
}
export default Main;
