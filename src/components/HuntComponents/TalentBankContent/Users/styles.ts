import styled from "styled-components";

export const UsersContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-height: 80vh;
    gap: 10px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 5px;
        border: none;
        box-shadow: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #808080;
        border-radius: 1px;
        }
    
`

export const CardContent = styled.div`
    padding: 15px;
    overflow: auto;
    display: flex;
    border-radius: 12px;
    img {
        height: 60px;
        width: 60px;
    }
    p{
        line-height: 0.1;
        font-size: 15px;
    }

    span {
        line-height: 0.4;
    }

    div {
        margin-top: 10px;
        padding: 0 10px;
    }
`

export const CardButtonContent = styled.div`    
    button {
        width: 100%;

    }
`