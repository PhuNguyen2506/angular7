import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo, User} from './data';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  dataOfPhotos(){
  	return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
  dataofUsers(){
  	return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
