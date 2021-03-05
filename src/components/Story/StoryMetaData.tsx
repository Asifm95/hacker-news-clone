import React from 'react';
import { Text } from '@chakra-ui/react';
import { IStory } from '../../types/StoryInterface';

interface StoryMetaDataProps {
    story: IStory;
    storyTime: string;
}

const StoryMetaData: React.FC<StoryMetaDataProps> = ({ story, storyTime }) => {
    return (
        <Text mt={1} fontSize="xs" color="gray.600">
            {story.kids?.length ?? 0} comments
            {story.score} point by {story.by} | {storyTime} ago |{' '}
        </Text>
    );
};
export default StoryMetaData;
