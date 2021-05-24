import React, { useContext, useEffect, Component  } from 'react';
import { AppContext } from '../context/AppContext';
import Header from '../components/HeaderFV';
import SearchInput from '../components/searchFV'
import { Container } from '@chakra-ui/layout';
import InterFont from '../styles/format.css';
import { withRouter } from 'react-router-dom';
import { HStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { VStack } from '@chakra-ui/layout';
import { Tabs, Tab, Modal, Row, Button, Col, Form, Card } from "react-bootstrap";

class ProductFV extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
            url: "",
            price: "",
            name: ""
        };
    }
    render() {
    const { datos } = this.props;
    return (
        
        <div>
            { datos.map((item) => (

                <Box weight="312" height="112" background="#ffffff" borderRadius="20px" mr="24px" ml="24" mt="10px">
                    <HStack
                        spacing={4}
                    >
                        <Image
                            
                            boxSize="100px"
                            src={item.url}
                            index={item.id}
                            w="80px"
                            h="80px"
                            box-shadow= "inset 5em 1em red"
                            
                        />

                        <VStack >
                            <Text color="black" mb="0" className="desc1">
                                <span>{item.name}</span>
                            </Text>

                            <Text color="#FA4A0C" className="desc2">
                                <span> $ {item.price} MXN</span>
                            </Text>
                        </VStack>
                    </HStack>
                </Box>

            ))}
        </div>
    )
}}

export default ProductFV