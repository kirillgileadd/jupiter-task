import React, {FC} from 'react';
import {HeaderContainer, NavBarItem, NavBarList, HeaderTitle, HeaderBackground, NavBar} from "./HeaderStyles";
import {Container} from "../../GlobalStyles";
import logo from '../../assets/img/CompositeLayer.svg'
import Flex from "../UI/Flex";
import Button from "../UI/Button";

const navBarItems = ['About', 'Services', 'Prising', 'Blog']

const Header: FC = () => {
    return (
        <HeaderBackground>
            <Container>
                <HeaderContainer>
                    <Flex
                        grow={1}
                        align='center'
                    >
                        <img src={logo} alt=""/>
                        <HeaderTitle>Agency</HeaderTitle>
                    </Flex>
                    <NavBar>
                        <NavBarList>
                            {navBarItems.map(item =>
                                <NavBarItem>
                                    {item}
                                </NavBarItem>)}
                        </NavBarList>
                    </NavBar>
                    <Flex
                        grow={1}
                        justify='flex-end'
                    >
                        <Button>Contact</Button>
                    </Flex>
                </HeaderContainer>
            </Container>
        </HeaderBackground>
    );
};

export default Header;