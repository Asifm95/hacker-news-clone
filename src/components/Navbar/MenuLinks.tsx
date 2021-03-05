import { Stack, Text, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

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
                pos="relative"
            >
                <MenuItem to="/">Top</MenuItem>
                <MenuItem to="/new">New</MenuItem>
                <MenuItem to="/jobs">Jobs</MenuItem>
            </Stack>
        </Box>
    );
};

const MenuItem: React.FC<MenuItemProps> = ({ children, to, ...rest }) => {
    const location = useLocation();
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        setIsActive(to === location.pathname);
    }, [to, location.pathname]);
    return (
        <RouterLink to={to}>
            <Text
                display="block"
                color="gray.600"
                {...rest}
                position="relative"
                _after={
                    isActive
                        ? {
                              content: '""',
                              position: 'absolute',
                              right: '0',
                              w: '100%',
                              h: '2px',
                              bottom: '-4px',
                              borderRadius: '5px',
                              backgroundColor: '#f56565',
                          }
                        : {}
                }
            >
                {children}
            </Text>
        </RouterLink>
    );
};
export default MenuLinks;
