import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { FiMenu, FiX } from 'react-icons/fi';

interface MenuToggleProps {
    toggle: () => void;
    isOpen: boolean;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen }) => {
    return (
        <Box
            display={{ base: 'block', md: 'none' }}
            color="black"
            onClick={toggle}
        >
            {isOpen ? <Icon as={FiX} /> : <Icon as={FiMenu} />}
        </Box>
    );
};
export default MenuToggle;
