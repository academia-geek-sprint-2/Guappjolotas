import { Heading } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { InputGroup } from '@chakra-ui/input';
import { InputLeftElement } from '@chakra-ui/input';
import { Search2Icon } from '@chakra-ui/icons';
import { Container } from '@chakra-ui/layout';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { VStack, Wrap, WrapItem } from '@chakra-ui/layout';
import { withRouter } from "react-router-dom";
import { Image } from '@chakra-ui/image';
import { CircularProgress } from '@chakra-ui/progress';

const Home = ({ history }) => {

    const { resources, food, setfood, id, setId} = useContext(AppContext)
    
    const { data } = resources;

    const handleId = e => {
        const _id = ~~e.currentTarget.getAttribute('index')-1;
        setId(_id)
        history.push(`/order`)
        console.log(history);

    }

    return (
        <Container background="#F2F2F2" w="360px" h="1244px" ml="auto" mr="auto">
                <Flex direction="column" mt="2" alignItems="center">
                    <Heading mt="20" mb="10">imagenes</Heading>
                    <Text mb="20">Nada como una Guajolota para empezar el día</Text>
                    <InputGroup >
                        <InputLeftElement
                            pointerEvents="none"
                            children={<Search2Icon color="gray.300" paddingRight="5" />}
                        />
                        <Input type="text" placeholder="Sabor guajolota,bebida..." ml="auto" mr="auto" w="312px" h="60px" borderRadius="50" border="none" />
                    </InputGroup>
                    <VStack 
                      spacing={4}
                      align="stretch"
                    >
                        {data[food].map(e => (
                            <Image
                              onClick={handleId}
                              boxSize="100px" 
                              src={e.url} 
                              index={e.id}
                            />
                        ))}
                    </VStack>
                </Flex>
        </Container>
    );
}

export default withRouter(Home);