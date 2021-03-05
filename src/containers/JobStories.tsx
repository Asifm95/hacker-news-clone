import { Box, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { getJobStoryIds } from '../apis';
import AddMore from '../components/Story/AddMore';
import Story from '../components/Story/Story';
import { IStoryIds } from '../types/StoryInterface';
import { INCREMENT } from '../utils/constants';

interface JobStoriesProps {}

const JobStories: React.FC<JobStoriesProps> = () => {
    const [storyIds, setStoryIds] = useState<IStoryIds>([]);
    const [count, setCount] = useState<number>(INCREMENT);

    useEffect(() => {
        getJobStoryIds()
            .then((data) => setStoryIds(data))
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleSetCount = () => setCount((count) => count + INCREMENT);
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
            <AddMore setCount={handleSetCount} />
        </Box>
    );
};
export default JobStories;
