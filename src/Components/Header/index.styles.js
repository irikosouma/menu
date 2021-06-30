import styled from 'styled-components'
const WrapHeader = styled.div`
/* display: flex;
align-items: center;
justify-content: center; */

/* height: 50px;
width: 700px; */
/* margin-bottom: 2rem; */
.header {
    color: #102a42;
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
}
    .line-border {
        border-bottom: 5px solid #C59D60;
        width: 5rem;
        height: .25rem;
        margin-left: auto;
        margin-right: auto;
    }
    
    @media only screen and (min-width: 50px) { 
        text-align: center;
        width: 0;
        header {
            color: #102a42;
            font-weight: 700;
            font-size: 40px;
            line-height: 40px;
        }
            .line-border {
                border-bottom: 5px solid #C59D60;
                width: 5rem;
                height: .25rem;
                margin-left: auto;
                margin-right: auto;
                margin-top: 20px;
            }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box
        }
    
}
@media only screen and (min-width: 200px) { 
    width: 100%;
}
`;
export {WrapHeader}