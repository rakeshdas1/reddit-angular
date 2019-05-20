import { Deserializer } from './deserializer.model';

export class RedditPost implements Deserializer {
    deserialize(input: any): this {
        Object.assign(this, input.data);
        if(this.thumbnail == "self" || this.thumbnail == "default" || this.thumbnail == "spoiler") {
            this.thumbnail = null;
        }
        return this;
    }
    subreddit: string;
    title: string;
    author_fullname: string;
    score: number;
    url: string;
    thumbnail: string;
}