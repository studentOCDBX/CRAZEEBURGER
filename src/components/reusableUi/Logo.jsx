import styled from 'styled-components';
import logoImg from '../../assets/img/logo.png';
import theme from '../../theme/index.js';

const LogoStyled = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Amatic SC', cursive;
    font-weight: ${theme.fonts.weights.bold};
    color: ${theme.colors.primary};
    & p {
        margin: 0;
        font-size: ${theme.fonts.size.P4};
        line-height: ${theme.fonts.size.P4};
        letter-spacing: 1.5px;
    }
    img {
        width: 50%;
        height: ${theme.fonts.size.P6};
        margin-inline: 5px;
    }
`;

function Logo({ className, onClick }) {
    return (
        <LogoStyled className={className} onClick={onClick}>
            <p>CRAZEE</p>
            <img src={logoImg} alt="Logo CrazyBurger" />
            <p>BURGER</p>
        </LogoStyled>
    );
}
export default Logo;
