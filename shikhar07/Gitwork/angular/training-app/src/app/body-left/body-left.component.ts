import { Component, OnInit } from '@angular/core';
import {books} from '../data';


@Component({
  selector: 'app-body-left',
  templateUrl: './body-left.component.html',
  styleUrls: ['./body-left.component.css']
})
export class BodyLeftComponent implements OnInit {
  books = books

  constructor() { }

  ngOnInit() {
  }
  increment(num){
    
  }

}
