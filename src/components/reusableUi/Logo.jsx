import styled from 'styled-components'

const LogoStyled = styled.div`
    background-color: #ddff00;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

function Logo() {
    return <LogoStyled>CRAZEE-BURGER Logo</LogoStyled>
}
export default Logo
