import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from "rxjs/operators";
import { RedditListing } from './reddit-listing.model';
@Injectable({
  providedIn: 'root'
})
export class RedditFetcherService {

  constructor(private http: HttpClient) {}

  getPopularPosts(): Observable<RedditListing>{
    return this.http.get(environment.reddit_popular_json)
      .pipe(
        map(data => (new RedditListing().deserialize(data))),
        catchError((e) => throwError(e))
      )
  }
}
