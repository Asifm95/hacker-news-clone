import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface LogoProps {
    w: string;
    color: string;
}

const Logo = (props: LogoProps) => {
    return (
        <Box {...props}>
            <RouterLink to={'/'}>
                <Text fontSize="lg" fontWeight="bold">
                    Hacker News
                </Text>
            </RouterLink>
        </Box>
    );
};
export default Logo;
