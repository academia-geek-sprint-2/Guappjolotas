import React, { useContext, useEffect } from 'react';
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
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

const Home = ({ history }) => {

    const { resources, food, setfood, id, setId } = useContext(AppContext)

    const { data } = resources;

    const handleId = e => {
        const _id = ~~e.currentTarget.getAttribute('index') - 1;
        setId(_id)
        history.push("/order")
        console.log(history);
    }

    return (
        <Container className="container">
            <Header />
            <SearchInput />


            
                <Tabs variant="unstyled">
                    <TabList>
                        <Tab
                            _selected={{
                                color: "white",
                                bg: "blue.500",
                                borderBottom: "2px solid",
                                borderBottomColor: "tomato",
                            }}
                        >
                            Tab 1
                        </Tab>
                        <Tab _selected={{ color: "white", bg: "green.400" }}>Tab 2</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <p>one!</p>
                        </TabPanel>
                        <TabPanel>
                            <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>;
           


            <Container mt="72px">
                {data[food].map(e => (

                    <Box weight="312" height="112" background="#ffffff" borderRadius="20px" mr="24px" ml="24" mt="10px">
                        <HStack
                            spacing={4}
                        >
                            <Image
                                onClick={handleId}
                                boxSize="100px"
                                src={e.url}
                                index={e.id}
                            />

                            <VStack >

                                <Text color="black" mb="0">
                                    <span>{e.name}</span>
                                </Text>

                                <Text color="#FA4A0C">
                                    <span> $ {e.price} MXN</span>
                                </Text>
                            </VStack>


                        </HStack>
                    </Box>

                ))}

            </Container>


        </Container>
    );
}

export default withRouter(Home);
