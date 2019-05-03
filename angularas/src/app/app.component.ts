import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { DescriptionService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  description: any;
  title = 'angularas';
  respObjects: Object [];

  constructor(private descriptionService: DescriptionService,
    private http: HttpClient,
    private router: Router){ }

  ngOnInit(){
    this.description = this.descriptionService.getDescription();
  }

  onCreateNew(){
    console.log(this.description.name);
    this.http.post('http://localhost:8080/create',{
      name: this.description.name,
      surname: this.description.surname,
      birthDate: this.description.birthDate,
      phone: this.description.phone,
      email: this.description.email
    })
    .subscribe(
      res => {
        this.respObjects = res as Object [];
        
        if (this.respObjects[0] == "ok") {
          
          
        } else {
          window.alert('Failed!');
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
