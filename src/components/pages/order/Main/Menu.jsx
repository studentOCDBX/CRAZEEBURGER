import { useState } from 'react';
import styled from 'styled-components';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu.js';
import theme from '../../../../theme/index.js';

const MenuStyled = styled.div`
    background: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    justify-items: center;
    padding: 50px 50px 150px;

    .productCard {
        background: #ac0404;
        width: 240px;
        height: 330px;
    }
`;
function Menu() {
    const [menu, setMenu] = useState(fakeMenu2);

    return (
        <MenuStyled>
            {menu.map((product) => {
                return <div className="productCard">{product.title}</div>;
            })}
        </MenuStyled>
    );
}
export default Menu;
