import { useState } from 'react';
import styled from 'styled-components';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu.js';

const MenuStyled = styled.div`
    background: green;
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
