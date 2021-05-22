import React from 'react'
import { Input } from '@chakra-ui/input';
import { InputGroup } from '@chakra-ui/input';
import { InputLeftElement } from '@chakra-ui/input';
import { Search2Icon } from '@chakra-ui/icons';

const searchFV = () => {
    return (

        <div>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<Search2Icon color="gray.300" paddingRight="4" mt="23" ml="50" />}
                />
                <Input type="text" className="inputSearch searchText" placeholder="Sabor de guajolota, bebida..." />
            </InputGroup>
        </div>
    )
}

export default searchFV
