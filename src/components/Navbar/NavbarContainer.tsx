import { Flex } from '@chakra-ui/react';
import React from 'react';

interface NavbarContainerProps {}

const NavbarContainer: React.FC<NavbarContainerProps> = ({ children }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify={{ base: 'space-between', md: 'start' }}
            wrap="wrap"
            maxW="960px"
            margin="auto"
            // mb={2}
            p={5}
            bg={['transparent']}
            color={['white']}
        >
            {children}
        </Flex>
    );
};

export default NavbarContainer;
