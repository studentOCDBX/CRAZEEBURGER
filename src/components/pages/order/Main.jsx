import styled from 'styled-components';

const MainStyled = styled.main`
    width: 100%;
    background: #1de413;
    flex: 1; /* or we can use this too  height: calc(95vh - 8vh);
        without the parent in flexbox */
`;
function Main() {
    return <MainStyled>Main</MainStyled>;
}
export default Main;
