import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { redditListing } from './reddit-listing.model';
@Injectable({
  providedIn: 'root'
})
export class RedditFetcherService {

  constructor(private http: HttpClient) {}

  getPopularPosts(): Observable<redditListing>{
    return this.http.get(environment.reddit_popular_json)
      .pipe(
        map(data => (new redditListing().deserialize(data))),
        catchError((e) => throwError(e))
      )
  }
}
