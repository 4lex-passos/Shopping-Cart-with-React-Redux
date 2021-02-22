import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container, LogoBox, Title, Navigator, Menu, Count } from "./styles";

import BerryLogo from "../../assets/icons/logo";
import CartIcon from "../../assets/icons/CartIcon";

export default function Header() {
    const PRODUCTS = useSelector((state) => state.cartState);

    return (
        <Container>
            <Link to="/" style={{ textDecoration: "none" }}>
                <LogoBox>
                    <BerryLogo width={55} height={55} />
                    <Title>
                        Berry <br /> Market
                    </Title>
                </LogoBox>
            </Link>

            <Navigator>
                <Link to="/" style={{textDecoration: "none" }}>
                    <Menu>HOME</Menu>
                </Link>
                <Link to="/cart" style={{ textDecoration: "none" }}>
                    <Count>
                        <CartIcon width="15" height="15" fill="#7d6c4f" />
                        {PRODUCTS.length}
                    </Count>
                </Link>
            </Navigator>
        </Container>
    );
}
