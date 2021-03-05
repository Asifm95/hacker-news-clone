import { HStack, Heading, Icon } from '@chakra-ui/react';
import React from 'react';
import { FiTriangle } from 'react-icons/fi';
import { zeroPad } from '../../utils/helper';

type StoryIndexProps = {
    index: number;
    width: string;
};

const StoryIndex: React.FC<StoryIndexProps> = ({ index, ...rest }) => {
    return (
        <HStack h="100%" justify="space-between" {...rest}>
            <Heading fontSize="lg">{zeroPad(index, 2)}</Heading>
            <Icon as={FiTriangle} fill="primary" color="primary" />
        </HStack>
    );
};
export default StoryIndex;
