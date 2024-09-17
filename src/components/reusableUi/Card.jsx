import styled from 'styled-components';
import PrimaryButton from './PrimaryButton.jsx';
import theme from '../../theme/index.js';

const CardStyled = styled.div`
    background: ${theme.colors.white};
    display: grid;
    grid-template-rows: 65% 1fr;
    justify-items: center;
    width: 75%;
    height: 330px;
    height: calc(22 * ${theme.fonts.size.P0});
    padding: 20px 20px 10px 20px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};

    .cardImgContainer {
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
        color: ${theme.colors.dark};
        h2 {
            margin: 0;
            font-family: 'Amatic SC';
            font-weight: ${theme.fonts.weights.bold};
            font-size: ${theme.fonts.size.P4};
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
                color: ${theme.colors.primary};
                font-weight: ${theme.fonts.weights.regular};
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
function Card({ imageSource, title, priceDescription }) {
    return (
        <CardStyled>
            <div className="cardImgContainer">
                <img src={imageSource} alt={title} />
            </div>
            <div className="cardBody">
                <h2> {title} </h2>
                <div className="cardbodyDescription">
                    <span> {priceDescription}</span>
                    <PrimaryButton Label={'Ajouter'} className={'cardBtn'} />
                </div>
            </div>
        </CardStyled>
    );
}
export default Card;
