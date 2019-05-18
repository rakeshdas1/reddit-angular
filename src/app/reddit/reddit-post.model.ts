import { Deserializer } from './deserializer.model';

export class redditPost implements Deserializer {
    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
    subreddit: string;
    title: string;
    author_fullname: string;
    score: number;
}