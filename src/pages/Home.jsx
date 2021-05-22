
import { Heading } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Text } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { InputGroup } from '@chakra-ui/input';
import { InputLeftElement } from '@chakra-ui/input';
import { Search2Icon } from '@chakra-ui/icons';
import { Container } from '@chakra-ui/layout';



class Home extends Component {
    constructor() {
        super();
        this.state = {
            nombre: "",
            precio: "",
            imagen: "",


        }
    }



    render() {
        const { Producto } = this.props
        return (
            <Container background="#F2F2F2" w="360px" h="1244px" ml="auto" mr="auto">
                <Flex direction="column" mt="2" alignItems="center">
                    <Heading mt="20" mb="10">
                        imagenes
                    </Heading>
                    <Text mb="20">
                        Nada como una Guajolota para empezar el día
               </Text>
                    <InputGroup >
                        <InputLeftElement
                            pointerEvents="none"
                            children={<Search2Icon color="gray.300" paddingRight="5" />}

                        />
                        <Input type="text" placeholder="Sabor guajolota,bebida..." ml="auto" mr="auto" w="312px" h="60px" borderRadius="50" border="none" />
                    </InputGroup>
                </Flex>
                {Producto.map((item) => {
                    return (
                        <Container>

                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <div class="container-fluid">
                                    <a class="navbar-brand" href="#">Navbar</a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <div class="navbar-nav">
                                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                                            <a class="nav-link" href="#">Features</a>
                                            <a class="nav-link" href="#">Pricing</a>
                                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                        </div>
                                    </div>
                                </div>
                            </nav>


                        </Container>

                    )
                })}



            </Container>


        );
    }
    /* =======
    import React, { useContext, useEffect } from 'react';
    import { AppContext } from '../context/AppContext';
    
    const Home = () => {
    
        const { resources } = useContext(AppContext)
        
        const guajolotaVerde = resources.data.guajolotas[0];
    
        return (
            <>
            <h1>I'm at Home</h1>
            <img src={guajolotaVerde.url}/>
            </>
        );
    >>>>>>> e7ead78abba92fe75501887b853bdff7a35c09e7 */
}

export default Home;