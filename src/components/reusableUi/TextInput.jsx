import styled from 'styled-components'
import theme from '../../theme/index.js'

const InputStyled = styled.div`
    width: 80%;
    height: 55px;
    border-radius: ${theme.borderRadius.round};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background: ${theme.colors.white};
    margin-bottom: 18px;
    .personIcone {
        color: ${theme.colors.greyBlue};
        width: ${theme.fonts.size.P0};
        height: ${theme.fonts.size.P0};
    }
    & input {
        width: 80%;
        height: 19px;
        border: none;
        &::placeholder {
            color: ${theme.colors.greyMedium};
            opacity: 1;
        }
    }
`

export default function TextInput({
    value,
    onChange,
    Icon,
    className,
    ...extraProps
}) {
    return (
        <InputStyled>
            {Icon && Icon}
            <input
                value={value}
                onChange={onChange}
                {...extraProps}
                type="text"
            />
        </InputStyled>
    )
}
