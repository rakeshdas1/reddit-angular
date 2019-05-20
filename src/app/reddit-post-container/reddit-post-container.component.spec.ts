import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditPostContainerComponent } from './reddit-post-container.component';

describe('RedditPostContainerComponent', () => {
  let component: RedditPostContainerComponent;
  let fixture: ComponentFixture<RedditPostContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditPostContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditPostContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
