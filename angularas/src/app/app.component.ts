import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { DescriptionService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  description: any;
  title = 'angularas';
  constructor(private descriptionService: DescriptionService){ }

  ngOnInit(){
    this.description = this.descriptionService.getDescription();
  }
}
