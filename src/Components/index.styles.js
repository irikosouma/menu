import styled from 'styled-components';
const WrapMenu = styled.div`
    width: 600px;
    height: calc(100% - 300px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .menu-btn {
        width: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        div {
            padding: 0 20px;
        }
    }
`;
export {WrapMenu}