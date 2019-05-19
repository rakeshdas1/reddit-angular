import { redditPost } from './reddit-post.model';
import { Deserializer } from "./deserializer.model";
export class RedditListing implements Deserializer {
    public posts: Array<redditPost>;
    deserialize(input: any): this {
        Object.assign(this, input);
        this.posts = input.data.children.map(post => new redditPost().deserialize(post));
        return this;
    }
}