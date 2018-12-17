import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Array<Object> = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum",
      loveIts: 0,
      created_at: new Date()

    },
    {
      title: "Mon deuxième post",
      content: "Lorem ipsum",
      loveIts: 0,
      created_at: new Date()

    },
    {
      title: "Mon troisième post",
      content: "Lorem ipsum",
      loveIts: 0,
      created_at: new Date()

    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
