import React, { useContext, useEffect, useState} from 'react';
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
import Producto from '../components/ProductFV'

const Home = ({ history }) => {

    const { resources } = useContext(AppContext)
    const [food, setfood] = useState("bebidas");
    const [food1, setfood1] = useState("guajolotas");
    const [food2, setfood2] = useState("tamales");
    const [id, setId] = useState(0)
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
            <Container  mt="40px"  >
                <Row>
                    <Col>
                        <Tabs defaultActiveKey="Guajalotas" 
                             >
                            <Tab eventKey="Guajalotas" title="Guajalotas" className="botones">
                            {data[food1].map((e) => (
                        <Producto datos={[e]} />))}
                            </Tab>
                            <Tab eventKey="Bebidas" title="Bebidas"className="botones">
                            {data[food].map((e) => (
                        <Producto datos={[e]} />))}
                                
                            </Tab>
                            <Tab eventKey="Tamales" title="Tamales" className="botones" >
                            {data[food2].map((e) => (
                        <Producto datos={[e]} />))}
                                
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>







        </Container>
    );
}

export default withRouter(Home);