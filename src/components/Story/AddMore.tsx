import { Center } from '@chakra-ui/react';
import React from 'react';

interface AddMoreProps {
    setCount: () => void;
}

const AddMore: React.FC<AddMoreProps> = ({ setCount }) => {
    return (
        <Center
            onClick={setCount}
            pt={10}
            pb={20}
            fontSize="sm"
            fontWeight="bold"
            color="primary"
            cursor="pointer"
        >
            LOAD MORE
        </Center>
    );
};
export default AddMore;
