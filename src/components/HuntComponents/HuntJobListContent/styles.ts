import styled from "styled-components";

export const JobListContainer = styled.div`
    max-height: 80vh;
    margin-top: 20px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
`;

export const CardContent = styled.div`
    height: 80vh;
    overflow-y: auto;
    color: #ffff;
    &::-webkit-scrollbar {
        width: 5px;
        border: none;
        box-shadow: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #808080;
        border-radius: 1px;
        }
`;

export const JobListLeftcontent = styled.div.attrs((props: { isSelected: any }) => props)`    
    padding: 10px 20px;
    cursor: pointer;
    height: 139px;
    background: ${(props) => props.isSelected ? `#F6F6F6` : `#394049`};
    color: ${(props) => props.isSelected ? `#0000` : `#fff`};


    h1 {
        font-size: 18px;
    color: ${(props) => props.isSelected ? `#000000` : `#ffff`};

    }

    p{
        font-size: 15px;
        color: ${(props) => props.isSelected ? `#000000` : `#ffff`};
    }
`;

export const JobListRightContent = styled.div`
width: 80%;
 background: #476382;
`

export const ContentSelected = styled.div`
    padding: 23px 64px;
    color: #ffff;
    
    h1 {
        line-height: 0.8;
        font-size: 22px;
        color: #ffff;

    }
    span {
        background: #FFFFFF;
        padding: 2px 5px;
        border-radius: 10px;
        margin-right: 10px;
        color: #000000;
        padding:  2px 10px;
        font-weight: 500;
    }
    p{
        font-size: 15px;
        color: #ffff;
        line-height: 1.3;

    }
    h3{
        font-size: 15px;
    color: #ffff;

    }

    .Button-content{
        display: flex;
        margin-top: 34px;
        button {
            background: #FFFFFF;
            color: #000000;
            border-radius: 10px;
            margin-right: 30px;
            border: none;
            cursor: pointer;
            font-weight: 600;
            height: 39px;
        }

    }
    .description-content{
        margin-top: 35px;
        span{
            background: #FA7268;
            color: #ffff;
            font-weight: 600;
        }

        p {
            margin-top: 20px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 2.0;
        }
    }
    `;

export const CardSelected = styled.div`
background: #F6F6F6;
`;