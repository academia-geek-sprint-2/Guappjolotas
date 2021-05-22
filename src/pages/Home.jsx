import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import Header from '../components/HeaderFV';
import SearchInput from '../components/searchFV'
import { Container } from '@chakra-ui/layout';
import InterFont from '../styles/format.css';
import { withRouter } from 'react-router-dom';
import { VStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';


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
            <VStack
                      spacing={4}
                      align="stretch"
                    >
                        {data[food].map(e => (
                            <div>
                            <Image
                              onClick={handleId}
                              boxSize="100px" 
                              src={e.url} 
                              index={e.id}
                            />
                            {e.name}
                            {e.price}
                            </div>
                        ))}
                        
                    </VStack>
        </Container>
    );
}

export default withRouter(Home);
