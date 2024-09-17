import styled from 'styled-components';
import PrimaryButton from '../../../reusableUi/PrimaryButton.jsx';
import { formatPrice } from '../../../../utils/maths.js';

const ProductCardStyled = styled.div`
    background: #ffffff;
    display: grid;
    grid-template-rows: 65% 1fr;
    justify-items: center;
    width: 75%;
    height: 330px;
    padding: 20px 20px 10px 20px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: 15px;

    .cardImgContainer {
        /* width: 200px;  width: 80%; equivaut à 63%*/
        width: 200px;
        height: 145px;
        margin: 30px auto 15px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .cardBody {
        width: 200px;
        height: 105px;
        display: grid;
        grid-template-rows: 1fr 1fr;
        color: #17161a;
        h2 {
            margin: 0;
            font-family: 'Amatic SC';
            font-weight: 700;
            font-size: 36px;
            line-height: 45px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .cardbodyDescription {
            width: 190px;
            height: 66px;
            display: grid;
            grid-template-columns: 50% 50%;
            align-items: center;
            padding: 5px;
            & span {
                color: #ffa01b;
                font-weight: 400;
                font-size: 1rem;
                line-height: 22px;
            }
            & .cardBtn {
                width: 95px;
                height: 38px;
            }
        }
    }
`;
function ProductCard({ imageSource, title, price }) {
    return (
        <ProductCardStyled className="productCard">
            <div className="cardImgContainer">
                <img src={imageSource} alt={title} />
            </div>
            <div className="cardBody">
                <h2> {title} </h2>
                <div className="cardbodyDescription">
                    <span> {formatPrice(price)} €</span>
                    <PrimaryButton Label={'Ajouter'} className={'cardBtn'} />
                </div>
            </div>
        </ProductCardStyled>
    );
}
export default ProductCard;
