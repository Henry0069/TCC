import { Component } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent 
{
  public images: GalleryItem[] = [];

  ngOnInit(): void 
  { 
    this.images = [
      new ImageItem({ src: '../assets/images/BadHabits.jpg', thumb: './assets/images/BadHabits.jpg' }),
      new ImageItem({ src: '../assets/images/Blue.jpg', thumb: '../assets/images/Blue.jpg' }),
      new ImageItem({ src: '../assets/images/Circles.jpg', thumb: '../assets/images/Circles.jpg' }),
      new ImageItem({ src: '../assets/images/HurtMyFeelings.jpg', thumb: './assets/images/HurtMyFeelings.jpg' }),
      new ImageItem({ src: '../assets/images/Stay.jpg', thumb: '../assets/images/Stay.jpg' }),
      new ImageItem({ src: '../assets/images/WlakedThroughFire.jpg', thumb: '../assets/images/WlakedThroughFire.jpg' }),
      new ImageItem({ src: '../assets/images/Greedy.jpg', thumb: '../assets/images/Greedy.jpg' }),
      new ImageItem({ src: '../assets/images/UptownGirl.jpg', thumb: '../assets/images/UptownGirl.jpg' }),
      new ImageItem({ src: '../assets/images/Gods.jpg', thumb: '../assets/images/Gods.jpg' }),
    ];  
  }

}
