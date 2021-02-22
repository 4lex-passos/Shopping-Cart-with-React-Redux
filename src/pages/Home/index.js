import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CartIcon from "../../assets/icons/CartIcon";
import AppHeader from "../../components/AppHeader/index";

import {
    Container,
    FlatList,
    Title,
    Subtitle,
    FruitImage,
    AddButton,
    Price,
} from "./styles";

export default function HomePage() {
    const dispatch = useDispatch();

    const PRODUCTS = useSelector((state) => state.productsState);

    return (
        <Container>
            <AppHeader />

            {PRODUCTS.map((product) => (
                <FlatList>
                    <FruitImage src={product.img} />
                    <FlatList.Box>
                        <Title>{product.name}</Title>

                        <Subtitle>{product.subtitle}</Subtitle>
                        <FlatList.Bottom>
                            <Price>{product.price}</Price>
                            <AddButton
                                onClick={() => {
                                    dispatch({
                                        type: "ADD_ITEM",
                                        item: {
                                            id: Math.random(product.id),
                                            product: product
                                        },
                                    });
                                }}
                            >
                                <CartIcon width="15" height="15" fill="#fff" />
                                ADD TO CART
                            </AddButton>
                        </FlatList.Bottom>
                    </FlatList.Box>
                </FlatList>
            ))}
        </Container>
    );
}
