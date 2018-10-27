import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import { SearchService } from '../search.service';
import * as $ from "jquery";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  viewRepo:boolean = false;
  ngOnInit() {
  }
  user:User;
  repos =[];
  clone = []
  constructor(private searcher:SearchService) {}
  users:User[] = []
  searchUser() {
    let userName = $("#name").val()
    this.user = this.searcher.getUser(userName);
    this.repos = this.searcher.getRepo(userName);
    this.clone = this.repos;
    $("#name").val("")
    this.viewRepo = false;
    console.log(this.repos)
  }
  toggleRepos() {
    this.viewRepo = !this.viewRepo;
  }
  searchRepo() {
    let toSearch = $("#repoSearch").val();
    this.repos.forEach(element => {
      element.name.indexOf(toSearch) === -1 ? element.display = false : element.display = true;
    });
    $("#repoSearch").val("")
  }
  viewAll() {
    this.repos.forEach(repo => {
      repo.display = true;
    })
  }
}
