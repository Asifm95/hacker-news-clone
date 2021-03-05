import { Stack, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Link as RouterLink } from 'react-router-dom';

interface MenuLinksProps {
    isOpen: boolean;
}
interface MenuItemProps {
    to: string;
}

const MenuLinks: React.FC<MenuLinksProps> = ({ isOpen }) => {
    return (
        <Box
            display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
            flexBasis={{ base: '100%', md: 'auto' }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={['center', 'space-between', 'flex-end', 'flex-end']}
                direction={['column', 'row', 'row', 'row']}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/">Top</MenuItem>
                <MenuItem to="/new">New</MenuItem>
                <MenuItem to="/jobs">Jobs</MenuItem>
            </Stack>
        </Box>
    );
};

const MenuItem: React.FC<MenuItemProps> = ({ children, to, ...rest }) => {
    return (
        <BrowserRouter>
            <RouterLink to={to}>
                <Text display="block" color="gray.600" {...rest}>
                    {children}
                </Text>
            </RouterLink>
        </BrowserRouter>
    );
};
export default MenuLinks;
