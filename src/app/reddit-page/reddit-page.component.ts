import { Component, OnInit } from '@angular/core';
import { RedditFetcherService } from '../reddit/reddit-fetcher.service';
import { redditListing } from '../reddit/reddit-listing.model';

@Component({
  selector: 'app-reddit-page',
  templateUrl: './reddit-page.component.html',
  styleUrls: ['./reddit-page.component.scss']
})
export class RedditPageComponent implements OnInit {
  redditPageListing: redditListing;

  constructor(private redditService: RedditFetcherService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.redditService.getPopularPosts()
      .subscribe(
        data => (this.redditPageListing = data)
      )
  }

}
