import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user"
import {environment} from '../environments/environment'
import { Repo } from './repo';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  complete:boolean = false;
  constructor(private http:HttpClient) {}
  getUser(name) {
    interface ApiData {
      name:string;
      avatar:string;
      bio:string;
      followers:number;
      following:number;
    }
    let user = new User("","",0,0,"","","",0);
    let promise = new Promise((resolve,reject) => {
      this.http.get<ApiData>(`https://api.github.com/users/${name}?access_token=${environment.apiKey}`).toPromise().then(data => {
        user.name = data["login"];
        user.url = data["html_url"]
        user.created_at = data["created_at"]
        user.repos = data["public_repos"]
        user.avatar = data["avatar_url"];
        user.bio = data["bio"];
        user.followers = data["followers"];
        user.following = data["following"];
        if(data["bio"] === null) {
          user.bio = "Github user"
        }
        resolve();
      },err => {
        user.name = "User not found";
        reject(err);
      })
    })
    return user;
  }
  getRepo(name) {
    interface ApiData {
      name:string;
      description:string;
      forks:number;
      language:string;
      watches:string;
      url:string;
      stars:number
    }
    let repos = [];
    let promise = new Promise((resolve,reject) => {
      this.http.get<ApiData>(`https://api.github.com/users/${name}/repos?access_token=${environment.apiKey}`).toPromise().then(response => {
        for(let i = 0; i < response["length"];i++) {
          let newRepo = new Repo("","",0,0,"","",0)
          newRepo.name = response[i]["name"];
          newRepo.forks = response[i]["forks"];
          newRepo.language = response[i]["language"];
          newRepo.stars = response[i]["stargazers_count"];
          newRepo.watches = response[i]["watchers"];
          newRepo.url = response[i]["html_url"];
          repos.push(newRepo)
        }
      }, err => {
        alert("Repo npt found");
        reject(err);
      })
    })
    return repos
  }
}
