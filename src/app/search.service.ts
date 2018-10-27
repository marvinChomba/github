import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user"
import { resolve } from 'url';
import { reject } from 'q';
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
    let user = new User("","",0,0,"","","");
    let promise = new Promise((resolve,reject) => {
      this.http.get<ApiData>(`https://api.github.com/users/${name}?access_token=284a70214412bb8997800d2a05b0635cf59d5e71`).toPromise().then(data => {
        user.name = data["login"];
        user.url = data["html_url"]
        user.created_at = data["created_at"]
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
    console.log(user)
    return user;
  }
  getRepo(name) {
    let repos = [];
    let promise = new Promise((resolve,reject) => {
      this.http.get(`https://api.github.com/users/${name}/repos?access_token=284a70214412bb8997800d2a05b0635cf59d5e71`).toPromise().then(data => {
        for(let i = 0; i < data["length"]; i++) { 
          let newRepo = new Repo("","",0,0,"","",0)
          newRepo.name = data[i]["name"];
          newRepo.description = data[i]["description"];
          newRepo.forks = data[i]["forks"];
          newRepo.language = data[i]["language"];
          newRepo.watches = data[i]["watches"];
          newRepo.url = data[i]["html_url"]
          newRepo.stars = data[i]["stargazers_count"]
          repos.push(newRepo)
        }
      })
    })
    return repos
  }
}
