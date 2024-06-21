import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/Ipost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  posts: Array<IPost> = []
  public loaded = false;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.loadPosts()
  }
  
  loadPosts(){
    this.loaded = true;
    this.postService.loadingPost().subscribe((res: any) => {
      const { posts } = res; 
      this.posts = posts;
      // console.log(post)
      this.loaded = false;
    })
  }

}
