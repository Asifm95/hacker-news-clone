import axios from 'axios';
import { IStory, IStoryIds } from '../types/StoryInterface';

export const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `newstories.json`;
export const topStoriesUrl = `topstories.json`;
export const jobStoriesUrl = `jobstories.json`;
export const storyUrl = `item/`;

const api = axios.create({
    baseURL: BASE_URL,
});

export const getStory = async (storyId: number): Promise<IStory> => {
    const result = await api.get<IStory>(`${storyUrl + storyId}.json`);
    return result.data;
};

export const getNewStoryIds = async (): Promise<IStoryIds> => {
    const result = await api.get<IStoryIds>(newStoriesUrl);
    return result.data;
};
export const getTopStoryIds = async (): Promise<IStoryIds> => {
    const result = await api.get<IStoryIds>(topStoriesUrl);
    return result.data;
};
export const getJobStoryIds = async (): Promise<IStoryIds> => {
    const result = await api.get<IStoryIds>(jobStoriesUrl);
    return result.data;
};
