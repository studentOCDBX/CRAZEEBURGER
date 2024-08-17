import styled from 'styled-components'
import theme from '../../../theme/index.js'

const InputStyled = styled.div`
    width: 400px;
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
        width: 15px;
        height: 15px;
    }
    & input {
        width: 324px;
        height: 19px;
        border: none;
    }
`

export default function Input({
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
