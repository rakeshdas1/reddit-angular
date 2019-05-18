import { redditPost } from './reddit-post.model';
import { Deserializer } from "./deserializer.model";
export class redditListing implements Deserializer {
    public postList: Array<redditPost>;
    deserialize(input: any): this {
        Object.assign(this, input);
        this.postList = input.data.children.map(post => new redditPost().deserialize(post));
        return this;
    }
}