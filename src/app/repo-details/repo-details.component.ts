import { Component, OnInit,Input } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {
  @Input() repos:Repo;
  constructor() { }

  ngOnInit() {
  }

}
