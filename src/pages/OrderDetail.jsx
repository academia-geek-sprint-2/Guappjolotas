import { Image } from '@chakra-ui/image';
import { Box, Center, Container, Flex, Heading, Text, VStack, Wrap, WrapItem } from '@chakra-ui/layout';
import { MinusIcon, AddIcon } from '@chakra-ui/icons'
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const OrderDetail = () => {
    const { resources } = useContext(AppContext)
    const [food, setfood] = useState("guajolotas");
    const [id, setId] = useState(0)
    const [combo, setCombo] = useState(0)

    const pickFood = resources.data[food][id]
    
    const flavors = resources.data.sabores["tortas"];
    console.log(resources.data.sabores);
    
    return (
        <Container background="#F2F2F2" w="360px" h="1244px" ml="auto" mr="auto">
            <Flex direction="column" mt="2" alignItems="center">
                <Image src={pickFood.url} alt={pickFood.name} />
                <Heading >Guajolota de tamal de {pickFood.name}</Heading>
                <Heading>${pickFood.price} MXN</Heading>
                <div>
                    <MinusIcon/>5<AddIcon/>
                </div>
                <Heading alignSelf="start">Sabores</Heading>
                <Flavors flavors={flavors} setFlavor={setId}/>
                <Heading alignSelf="start">Guajolocombo</Heading>
                <Text alignSelf="start">Selecciona una {} que mas te guste y disfruta de tu desayuno</Text>
            </Flex>
        </Container>
    );
}

const Flavors = ({flavors, setFlavor}) => {
    const handleId = e => {
        const opt = ~~e.currentTarget.getAttribute('index');
        setFlavor(opt-1)
    }
    return(
        <>
        <Wrap>
            { flavors.map(flavor => (
            <WrapItem index={flavor.id} onClick={handleId}>
            <Center w="180px" h="80px">
            <Image 
                boxSize="100px"
                objectFit="cover"
                src={flavor.url}
                alt={flavor.id}
            />
            </Center>
            </WrapItem>
            ) ) }
        </Wrap>
        </>
    )
}
const Combo = ({drinks, setCombo}) => {
    const handleId = e => {
        console.log(~~e.currentTarget.getAttribute('index')-1);
    }
    return(
        <>
        <Wrap>
            { drinks.map(drink => (
            <WrapItem index={drink.id} onClick={handleId}>
            <Center w="180px" h="80px">
            <Image 
                boxSize="100px"
                objectFit="cover"
                src={drink.url}
                alt={drink.key}
            />
            </Center>
            </WrapItem>
            ) ) }
        </Wrap>
        </>
    )
}

export default OrderDetail;