import React from 'react';
import { Heading } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';

import { Text } from '@chakra-ui/layout';

import styled from 'styled-components'
import logo from '../utils/logo.png'
import cart from '../utils/shop-cart.png'

const StyledLogo = styled.img`
    width: 64px;
    height: 64px;
    padding-right: 120px;
    `;

const StyledCart = styled.img`
    width: 24px;
    height: 24px;
    padding-left: 100px;
    margin-bottom: 22px;
    `;

const headerFV = () => {
    return (
        <div>
            <Flex direction="column" mt="2" alignItems="center">
                
                <Heading mt="20" mb="10">
                <StyledLogo src={logo} alt="Logo" />
                <StyledCart src={cart} alt="Carrito de compra" />
                </Heading>
                <Text mb="20" className="mainText">
                    Nada como una Guajolota para empezar el día
               </Text>
            </Flex>
        </div>
    )
}

export default headerFV;
