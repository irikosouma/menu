import styled from 'styled-components';
const WrapMenu = styled.div`

    /* width: 600px;
    height: calc(100% - 140px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    /* .menu-btn {
        width: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 70px;
        .btn {
            border: none;
            background-color: transparent;
            color: black;
            padding: 8px 15px;
            margin:0 7px;
            font-size: 16px;
            border-radius: 4px;
            width: fit-content;
            cursor: pointer;
        }
        .success {
            color: #C59D60;
        }
        .success:hover {
            background-color: #C59D60;
            color:#fff;
        }
    } */
    /* .list-dishes {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;

    } */
    //end code ban dau
    /* @media only screen and (max-width: 1199px) {
        
            .list-dishes {
                display: grid;
                grid-template-columns: 1fr ;
                grid-column-gap: 30px;

            }
            

}
@media only screen and (min-width: 1200px) {
        
        .list-dishes {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 30px;

        }

}
@media only screen and (max-width: 767px) {
        
        .list-dishes {
            display: grid;
            grid-template-columns: 1fr ;
            grid-column-gap: 30px;

        }

} */
@media only screen and (min-width: 50px) { 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .list-dishes {
        width: 90vw;
        margin: 0 auto;
        max-width: 1170px;
        display: grid;
        grid-gap: 3rem 2rem;
        gap: 3rem 2rem;
        justify-items: center;
    }
    .menu-btn {
        margin-top: 2rem;
        margin-bottom: 4rem;
        display: flex;
        justify-content: center;
        .btn {
            border: none;
            background-color: transparent;
            color: black;
            padding: 8px 15px;
            margin:0 7px;
            font-size: 16px;
            border-radius: 4px;
            width: fit-content;
            cursor: pointer;
        }
        .success {
            color: #C59D60;
        }
        .success:hover {
            background-color: #C59D60;
            color:#fff;
        }
    }
}

@media only screen and (min-width: 1200px) {
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
            .btn {
                border: none;
                background-color: transparent;
                color: black;
                padding: 8px 15px;
                margin:0 7px;
                font-size: 16px;
                border-radius: 4px;
                width: fit-content;
                cursor: pointer;
            }
            .success {
                color: #C59D60;
            }
            .success:hover {
                background-color: #C59D60;
                color:#fff;
            }
        }
        .list-dishes {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 30px;

        }
}
@media only screen and (max-width: 767px) {
    
    /* width: 600px; */
    height: calc(100% - 140px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .menu-btn {
        /* width: 500px; */
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 70px;
        .btn {
            border: none;
            background-color: transparent;
            color: black;
            padding: 8px 15px;
            margin:0 7px;
            font-size: 16px;
            border-radius: 4px;
            width: fit-content;
            cursor: pointer;
        }
        .success {
            color: #C59D60;
        }
        .success:hover {
            background-color: #C59D60;
            color:#fff;
        }
    }
    .list-dishes {
        width: 90vw;
        margin: 0 auto;
        max-width: 1170px;
        display: grid;
        grid-gap: 3rem 2rem;
        gap: 3rem 2rem;
        justify-items: center;
    }
}
@media only screen and (min-width: 1199px) {
    /* .list-dishes {
            display: grid;
            grid-template-columns: 1fr;
            grid-column-gap: 30px;
        } */
}
`;
export {WrapMenu}