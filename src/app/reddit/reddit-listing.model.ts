import { RedditPost } from './reddit-post.model';
import { Deserializer } from "./deserializer.model";
export class RedditListing implements Deserializer {
    public posts: Array<RedditPost>;
    deserialize(input: any): this {
        Object.assign(this, input);
        this.posts = input.data.children.map(post => new RedditPost().deserialize(post));
        return this;
    }
}