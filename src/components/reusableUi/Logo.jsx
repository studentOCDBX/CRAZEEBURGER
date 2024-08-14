import styled from 'styled-components'
import logoImg from '../../assets/img/logo.png'
import theme from '../../theme/index.js'

const LogoStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Amatic SC', cursive;
    font-weight: 700;
    margin-bottom: 72px;
    color: ${theme.colors.primary};
    h1 {
        font-size: 36px;
        line-height: 36px;
    }
    img {
        width: 80px;
        height: 60px;
    }
    transform: scale(2.5);
`

function Logo() {
    return (
        <LogoStyled>
            <h1>CRAZEE</h1>
            <img src={logoImg} alt="Logo CrazyBurger" />
            <h1>BURGER</h1>
        </LogoStyled>
    )
}
export default Logo
