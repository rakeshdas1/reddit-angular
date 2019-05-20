import { Component, OnInit, Input } from '@angular/core';
import { RedditPost } from '../reddit/reddit-post.model';

@Component({
  selector: 'app-reddit-post-container',
  templateUrl: './reddit-post-container.component.html',
  styleUrls: ['./reddit-post-container.component.scss']
})
export class RedditPostContainerComponent implements OnInit {
  @Input() post: RedditPost;
  constructor() { }

  ngOnInit() {
  }

}
