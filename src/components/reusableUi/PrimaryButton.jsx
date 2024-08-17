import styled from 'styled-components'
import theme from '../../theme/index.js'

const PrimaryButtonStyled = styled.button`
    width: 400px;
    height: 53px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.white};
    font-family: 'Arial', sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    border-radius: 5px;
    background: ${theme.colors.primary_burger};
    &:hover {
        border: 1px solid ${theme.colors.primary_burger};
        background: ${theme.colors.white};
        color: ${theme.colors.primary_burger};
        cursor: pointer;
    }
    &:active {
        border: 1px solid ${theme.colors.primary_burger};
        background: ${theme.colors.primary_burger};
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
