import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import {DataService} from '../data.service';
import {Photo, User} from '../data';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService) { }
  h1style: boolean = false;
  /*photoData: Photo[];
  userData: User[];*/
  photoData: Object;
  userData: Object;
  firstArray: Object;
  secondArray: Object;
  ngOnInit() {
  	this.getPhotos();
  	this.getUsers();
  }

  firstclick(){
  	this.h1style = true;
  	console.log("something"); 
  }

  getPhotos():void{
  	this.data.dataOfPhotos()
  	.subscribe(photoData => this.photoData = photoData);
  }

  getUsers():void{
  	this.data.dataofUsers().subscribe(data => {
  		this.userData = data;
  		/*this.firstArray = this.userData.slice(0, 4);
  		this.secondArray = this.userData.slice(5,9);*/
  		console.log(this.firstArray);
  	})
  }
  drop(event: CdkDragDrop<{name: string}[]>){
  	moveItemInArray(event.container.data,event.previousIndex, event.currentIndex);
  }

  dropTwoCol(event: CdkDragDrop<{name:string}[]>){
 	console.log(event.container + "    " + event.container)

  	if(event.previousContainer === event.container){
  		moveItemInArray(event.container.data, 
  						event.previousIndex, 
  						event.currentIndex);

  	}
  	else{
  		transferArrayItem(event.previousContainer.data,
  							event.container.data,
  							event.previousIndex,
  							event.currentIndex);
  	}
  }
}
