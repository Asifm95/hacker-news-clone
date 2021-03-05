import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface LogoProps {
    w: string;
    color: string;
}

const Logo = (props: LogoProps) => {
    return (
        <Box {...props}>
            <Text fontSize="lg" fontWeight="bold">
                Hacker News
            </Text>
        </Box>
    );
};
export default Logo;
