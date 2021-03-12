import styled from 'styled-components'
const WrapHeader = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #102a42;
font-weight: 700;
font-size: 40px;
line-height: 40px;
position: relative;
height: 50px;
width: 700px;
margin-bottom: 80px;
    .line-border {
        position: absolute;
        top: 40%;
        border-bottom: 5px solid #C59D60;
        width: 80px;
    }
`;
export {WrapHeader}