import styled from 'styled-components';
import PrimaryButton from '../../../reusableUi/PrimaryButton.jsx';

const ProductCardStyled = styled.div`
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
                    <span> {price} €</span>
                    <PrimaryButton Label={'Ajouter'} className={'cardBtn'} />
                </div>
            </div>
        </ProductCardStyled>
    );
}
export default ProductCard;
