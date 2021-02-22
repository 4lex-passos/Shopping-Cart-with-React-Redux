import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin-bottom: 25px;
    width: 100%;
`;

export const LogoBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-weight: bolder;
    font-size: 30px;
    margin-left: 5px;
    font-family: "Poppins", cursive;
    color: #532b69;
    line-height: 25px;

    @media (max-width: 500px) {
        font-size: 25px;
        line-height: 22px;
    }
`;

export const Navigator = styled.div`
    display: flex;
    gap: 5px;
`;

export const Menu = styled.h5`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #663f89;
    color: #fff;
    height: 30px;
    padding: 10px;
    border-radius: 5px;
    width: 80px;
    transition: 0.1s;

    &:hover {
        background-color: #8a53d7;
    }

    @media (max-width: 1000px) {
        height: 50px;
    }
`;

export const Count = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    background-color: #ffd99c;
    color: #7d6c4f;
    height: 30px;
    padding: 10px;
    border-radius: 5px;

    &:hover {
        border: 1px dashed #7d6c4f;
    }

    @media (max-width: 1000px) {
        height: 50px;
    }
`;
