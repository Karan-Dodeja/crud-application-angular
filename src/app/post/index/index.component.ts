import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent implements OnInit {
  posts: Post[] = [];
  
  constructor(public postService: PostService) {}
  
  ngOnInit(): void {
    this.postService.getAll().subscribe((dataV: Post[]) => {
      this.posts = dataV;
    });
  }

  deletePost(id: number) {
    this.postService.delete(id).subscribe(res => {
      this.posts = this.posts.filter(item => {
        item.id !== id
      });
      alert("Post deleted successfully")
    })
  }
}
