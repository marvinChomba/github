import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import * as $ from "jquery";
import { User } from "../user";

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {

  constructor(private searcher:SearchService) { }
  user:User;
  repos = [];
  viewRepo:boolean = false;
  ngOnInit() {
    this.user = this.searcher.getUser("marvinChomba");
    this.repos = this.searcher.getRepo("marvinChomba");
    this.viewRepo = false;
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
