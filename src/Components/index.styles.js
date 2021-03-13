import styled from 'styled-components';
const WrapMenu = styled.div`
    width: 600px;
    height: calc(100% - 140px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .menu-btn {
        width: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 70px;
        div {
            padding: 0 20px;
            color: #C59D60;
        }
    }
    .list-dishes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;

    }
`;
export {WrapMenu}