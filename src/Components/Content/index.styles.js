import styled from 'styled-components';
const WrapContent = styled.div`
    background-color: #fff;
    width: 1200px;
    border-radius: 5px;
    display: grid;
    grid-template-rows: 320px 1fr;
    margin-bottom: 35px;
    .image-style {
        width: 100%;
        height: 320px;
        object-fit: cover;
        border-radius: 5px 5px 0 0px;
    }
    .bound-content {
        margin: 25px;
        .title-price {
            display: flex;
            align-items: center ;
            justify-content: space-between;
            font-size: 16px;
            line-height: 16px;
            font-weight: 700;
            color: #102a42;
            letter-spacing: 2px;
            & :last-child {
                color: #49a6e9;
                background-color: #EBF7FF;
                padding: 4px 7px;
                border-radius: 4px;
            }
        }
        .desc {
            color: #617d98;
            font-size: 15px;
            line-height: 24px;
            font-weight: 400;
            .btn-read-more {
                    color: #49a6e9;
                    text-transform: capitalize;
                    cursor: pointer;
                    height: 20px;
                    padding-bottom: 5px;
                    background-color: #fff;
                    padding-left: 4px;
                }   
            
            .less {
                position: relative;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                .btn-read-more {
                    color: #49a6e9;
                    text-transform: capitalize;
                    cursor: pointer;
                    width: 270px;
                    height: 20px;
                    padding-bottom: 5px;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    background-color: #fff;
                    .dots {
                        color: #617d98;
                        padding: 0 4px 0 4px ;
                    }
                }    
            }

        }
        .btn {
            display: flex;
            align-items: center ;
            justify-content: center;
            margin-top: 20px;
            .btn-style {
                width: 200px;
                height: 28px;
                color: #bb2525;
                background-color: transparent;
                outline: none;
                border: 1px solid #bb2525;
                border-radius: 4px;
                cursor: pointer;
                letter-spacing: 2px;
            }
        }
        
    }
`;
export {WrapContent}