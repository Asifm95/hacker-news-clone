import { Box, HStack } from '@chakra-ui/react';
import React from 'react';

interface StoryContainerProps {}

const StoryContainer: React.FC<StoryContainerProps> = ({ children }) => {
    return (
        <Box
            p={5}
            borderWidth="1px"
            bg="white"
            _first={{ borderTopRadius: '6px' }}
            _last={{ borderBottomRadius: '6px' }}
        >
            <HStack spacing="20px">{children}</HStack>
        </Box>
    );
};
export default StoryContainer;
