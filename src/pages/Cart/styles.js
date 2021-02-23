import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 600px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;

    @media (max-width: 1000px) {
        width: 100vw;
        height: 100vh;
        border-radius: 0px;
        padding: 20px;
    }
`;

export const CartTotal = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    background-color: #ccf2e1;
    border: 1px dashed #6d8279;
    color: #6d8279;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
    min-width: 200px;
`;

export const FlatList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    border: 2px dashed #ddd;
    background-color: #ffd99c;
    border: 1px dashed #ccad7c;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;

    @media (max-width: 500px) {
        justify-content: space-between;
        gap: 10px;
    }
`;

export const FruitImage = styled.img`
    width: 35px;
    height: 35px;
`;

export const Title = styled.h3`
    display: flex;
    align-items: center;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.6);

    @media (max-width: 500px) {
        font-size: 16px;
    }
`;

export const Price = styled.h3`
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);

    border-radius: 5px;
    padding: 5px;

    @media (max-width: 500px) {
        font-size: 16px;
    }
`;

export const RemoveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    background-color: #ff8b7c;
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
        background-color: #663f89;
    }

      @media (max-width: 500px) {
        height: 50px;
    }
`;

export const Alert = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    background-color: #ffd99c;
    border: 1px dashed #ccad7c;
    color: #7d6c4f;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
`;
