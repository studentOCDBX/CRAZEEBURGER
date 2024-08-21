import styled from 'styled-components'
import theme from '../../theme/index.js'

const PrimaryButtonStyled = styled.button`
    width: 80%;
    height: 53px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    font-family: 'Arial', sans-serif;
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.P0};
    line-height: ${theme.fonts.size.P0};
    border-radius: ${theme.borderRadius.round};
    background: ${theme.colors.primary};
    &:hover {
        border: 1px solid ${theme.colors.primary};
        background: ${theme.colors.white};
        color: ${theme.colors.primary};
        cursor: pointer;
        transition: 0.5s ease-out;
    }
    &:active {
        border: 1px solid ${theme.colors.primary};
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
        cursor: pointer;
    }
`

export default function PrimaryButton({ Icon, Label }) {
    return (
        <PrimaryButtonStyled>
            {Label}
            {Icon && Icon}
        </PrimaryButtonStyled>
    )
}
