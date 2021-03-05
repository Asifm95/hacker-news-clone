export interface IStory {
    by: string;
    descendants: number;
    id: string;
    kids?: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
}

export type IStoryIds = number[];
