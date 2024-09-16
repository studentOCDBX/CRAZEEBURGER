import { useState } from 'react';
import styled from 'styled-components';
import { fakeMenu1 } from '../../../../fakeData/fakeMenu.js';
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
        display: grid;
        grid-template-rows: 65% 1fr;
        justify-items: center;
        height: 330px;
        width: 75%;
        /* display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; */
        padding: 20px 20px 10px 20px;

        .cardImgContainer {
            /* width: 200px;   width: 80%; equivaut à 63%*/
            width: 200px;
            height: 145px;
            margin: 30px auto 15px;
            border: 1px solid #a8ed91d4;

            img {
                width: 100%;
                height: 100%;
                object-fit: fill;
            }
        }
        .cardBody {
            border: 3px solid #e96011;
            width: 200px;
            height: 105px;
            display: grid;
            grid-template-rows: 1fr 1fr;
            h2 {
                margin: 0;
                border: 1px solid green;
                /*  font-family: 'Amatic SC';
                font-weight: 700;
                font-size: 36px;
                line-height: 45px; */
            }
            .cardbodyDescription {
                border: 1px solid green;
                width: 190px;
                height: 66px;
                display: grid;
                grid-template-columns: 50% 50%;
                align-items: center;
                padding: 5px;
                .cardBtn {
                    color: black;
                    width: 95px;
                    height: 38px;
                }
            }
        }
    }
`;
function Menu() {
    const [menu, setMenu] = useState(fakeMenu1);

    return (
        <MenuStyled>
            {menu.map((product) => {
                return (
                    <div className="productCard" key={product.id}>
                        <div className="cardImgContainer">
                            <img
                                src={product.imageSource}
                                alt={product.title}
                            />
                        </div>
                        <div className="cardBody">
                            <h2> {product.title} </h2>
                            <div className="cardbodyDescription">
                                <span> {product.price} €</span>
                                <button className="cardBtn">Ajouter</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </MenuStyled>
    );
}
export default Menu;
