import { Box, Heading, Skeleton, SkeletonCircle } from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import { getStory } from '../../apis';
import { IStory } from '../../types/StoryInterface';
import { convertTime } from '../../utils/timeConverter';
import StoryContainer from './StoryContainer';
import StoryIndex from './StoryIndex';
import StoryMetaData from './StoryMetaData';

interface StoryProps {
    id: number;
    index: number;
}

const Story: React.FC<StoryProps> = ({ id, index }) => {
    const [story, setStory] = useState<IStory>({} as IStory);
    const [storyTime, setStoryTime] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getStory(id)
            .then((data) => {
                if (data) {
                    setStory(data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                throw new Error(err);
            });
    }, [id, index]);

    useEffect(() => {
        const time = convertTime(story.time);
        setStoryTime(time);
    }, [story]);

    return (
        story && (
            <StoryContainer>
                {loading ? (
                    <SkeletonCircle size="10" isLoaded={!loading} />
                ) : (
                    <StoryIndex index={index} width="55px" />
                )}
                <Skeleton isLoaded={!loading}>
                    <Box>
                        <Heading
                            fontSize="md"
                            fontWeight="600"
                            color="gray.700"
                        >
                            {story.title}
                        </Heading>
                        <StoryMetaData storyTime={storyTime} story={story} />
                    </Box>
                </Skeleton>
            </StoryContainer>
        )
    );
};
export default Story;
