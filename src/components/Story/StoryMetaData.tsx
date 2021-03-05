import React from 'react';
import { Text } from '@chakra-ui/react';
import { IStory } from '../../types/StoryInterface';

interface StoryMetaDataProps {
    story: IStory;
    storyTime: string;
}

const StoryMetaData = ({ story, storyTime }: StoryMetaDataProps) => {
    const { type } = story;

    const storyMeta = (
        <Text mt={1} fontSize="xs" color="gray.600">
            {story.type} point by {story.by} | {storyTime} ago |{' '}
            {story.kids?.length ?? 0} comments
        </Text>
    );

    const jobMeta = (
        <Text mt={1} fontSize="xs" color="gray.600">
            posted by {story.by} | {storyTime} ago
        </Text>
    );
    return <>{type === 'job' ? jobMeta : storyMeta}</>;
};
export default StoryMetaData;
