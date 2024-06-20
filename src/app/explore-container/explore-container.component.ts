import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {

  ngOnInit(): void {
    this.onLoadingPost()
  };
  posts: any
  // IPost[] = []
  @Input() name?: string;
  constructor( private ServicePost: PostService ) {}

  onLoadingPost(){
    this.ServicePost.loadingPost().subscribe((post) =>{
      this.posts = post;
      console.log('post', this.posts)
    })
  }
  

}
