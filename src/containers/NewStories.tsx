import { Box } from '@chakra-ui/layout';
import { Center, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { getNewStoryIds } from '../apis';
import Story from '../components/Story/Story';
import { IStoryIds } from '../types/StoryInterface';

interface NewStoriesProps {}

const NewStories: React.FC<NewStoriesProps> = () => {
    const [storyIds, setStoryIds] = useState<IStoryIds>([]);
    const [count, setCount] = useState<number>(20);

    useEffect(() => {
        let cancelRequest = false;
        getNewStoryIds().then((data) => {
            if (cancelRequest) return;
            setStoryIds(data);
        });
        return function cleanup() {
            cancelRequest = true;
        };
    }, []);

    return (
        <Box bg="#f7fafc" minH="100vh">
            <VStack
                align="stretch"
                maxW="940px"
                margin="auto"
                pt={10}
                spacing={0}
                borderTopRadius="10px"
                minH="100vh"
            >
                {storyIds.slice(0, count).map((storyId, index) => (
                    <Story key={storyId} id={storyId} index={index + 1} />
                ))}
            </VStack>
            <Center
                onClick={() => setCount((count) => count + 20)}
                pt={10}
                pb={20}
                fontSize="sm"
                fontWeight="bold"
                color="primary"
                cursor="pointer"
            >
                LOAD MORE
            </Center>
        </Box>
    );
};
export default NewStories;
