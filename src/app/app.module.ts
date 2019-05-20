import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RedditPageComponent } from './reddit-page/reddit-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RedditPostContainerComponent } from './reddit-post-container/reddit-post-container.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditPageComponent,
    RedditPostContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
