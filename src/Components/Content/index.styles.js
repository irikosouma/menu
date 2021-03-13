import styled from 'styled-components';
const WrapContent = styled.div`
    width: 600px;
    height: 200px; 
    display: grid;
    grid-template-columns: 215px 1fr;
    grid-column-gap: 20px;
    .wrap-image {
        width: 96%;
        height: 145px;
    }
    .image-style {
        width: 100%;
        height: 145px;
        object-fit: cover;
        border: 4px solid #C59D60;
        border-radius: 3px;
    }
    .bound-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        p {
            margin: 0;
            padding: 0;
        }
        .title-price {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px dotted #617D99;
            & :first-child {
                color: #102a42;
                font-size: 16px;
                line-height: 16px;
                font-weight: 700;
                letter-spacing: 2px;
            }
            & :not(:first-child) {
                color: #C59D60;
                letter-spacing: 2px;
                font-size: 16px;
                line-height: 16px;
                font-weight: 700;
            }
        }
        .desc {
            color: #617d98;
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
        }
    }

`;
export {WrapContent}