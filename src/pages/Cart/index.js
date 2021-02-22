import React from "react";
import { useSelector, useDispatch } from "react-redux";

import AppHeader from "../../components/AppHeader/index";

import RemoveIcon from "../../assets/icons/RemoveIcon";

import {
    Container,
    CartTotal,
    FlatList,
    Title,
    FruitImage,
    RemoveButton,
    Price,
    Alert,
} from "./styles";

export default function CartPage() {
    const cartList = useSelector((state) => state.cartState);
    const dispatch = useDispatch();

    const TOTAL = cartList.map((product) => {
        const getValue = product.product.price.replace("R$ ", "");
        const productsValue = parseFloat(getValue) * cartList.length;
        return productsValue;
    });

    return (
        <Container>
            <AppHeader />
            <CartTotal>
                <Title>TOTAL:</Title>
                <Title>R$ {TOTAL[0]}</Title>
            </CartTotal>
            {cartList.length > 0 ? (
                cartList.map((product) => (
                    <FlatList key={product.id}>
                        <FruitImage src={product.product.img} />

                        <Title>{product.product.name}</Title>
                        <Price>{product.product.price}</Price>

                        <RemoveButton
                            onClick={() => {
                                dispatch({
                                    type: "REMOVE_ITEM",
                                    id: product.id,
                                });
                            }}
                        >
                            <RemoveIcon width="15" height="15" fill="#fff" />
                            REMOVE
                        </RemoveButton>
                    </FlatList>
                ))
            ) : (
                <Alert>
                    <h4>O carrinho esta vazio!</h4>
                </Alert>
            )}
        </Container>
    );
}
