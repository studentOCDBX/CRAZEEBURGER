import styled from 'styled-components';
import theme from '../../../theme/index.js';

const MainStyled = styled.main`
    /* width: 100%; */
    background: ${theme.colors.background_white};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    flex: 1; /* or we can use this too  height: calc(95vh - 8vh);
        without the parent in flexbox */
`;
function Main() {
    return <MainStyled></MainStyled>;
}
export default Main;
