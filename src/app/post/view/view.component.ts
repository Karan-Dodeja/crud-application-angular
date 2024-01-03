import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  id!: number;
  post!: Post;

  constructor(
    public postSerview: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.postSerview.find(this.id).subscribe((data:any) => {
      this.post = data;
    })
  }
}
