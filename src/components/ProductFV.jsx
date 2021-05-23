import React, { Component } from 'react';
import { Container, Grid, Box } from '@chakra-ui/layout';

class ProductFV extends Component {
    constructor() {
        super();
        this.state = {
            producto: "",
            precio: "",
            imagen: "",
        }
    }

    render() {
        const { Producto } = this.props
        return (
            <div>

                {Producto.map((item) => {
                    return (
                        <Box>

                            <div className="productos">

                                 <Box bg="FFFFFF" w="312" h="112">
                              
                                 </Box>


                            </div>

                        </Box>
                    )
                })
                }
            </div >
        )
    }
}

export default ProductFV;
