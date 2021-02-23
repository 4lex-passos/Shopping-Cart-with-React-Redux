import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;

    @media (max-width: 1000px) {

        height: 100%;
        border-radius: 0px;
        padding: 20px;
    }
`;

export const FlatList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border: 1px dashed #bbb;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
`;

FlatList.Box = styled.div`
    display: flex;
    flex-direction: column;
`;

FlatList.Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FruitImage = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    width: fit-content;
    height: fit-content;

    @media (max-width: 630px) {
        margin-bottom: 20px;
    }
`;

export const Title = styled.h2`
    font-weight: bold;
    color: #3e2f4a;
`;

export const Subtitle = styled.p`
    color: #6f5f7a;
    width: 400px;
    margin: 10px 0 15px 0;
    font-weight: 450;

    @media (max-width: 630px) {
        width: auto;
    }
`;

export const AddButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #663f89;
    color: #fff;
    height: 30px;
    border: none;
    padding: 0px 10px 0px 10px;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: bold;
    transition: 0.2s;
    &:hover {
        background-color: #8a53d7;
    }
`;

export const Price = styled.h2`
    color: #ccad7c;
`;
