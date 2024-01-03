import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  form!: FormGroup;
  constructor(public postService: PostService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required),
    });
  }

  get() {
    return this.form.controls;
  }

  submit(){
    this.postService.create(this.form.value).subscribe((res:any) => {
      alert("Post Created Successfully.");
      (<any>this.router).navigate('post/index');
    })
  }
}
