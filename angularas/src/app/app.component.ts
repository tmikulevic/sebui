import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { DescriptionService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  description: any;
  title = 'angularas';
  respObjects: Object [];
  
  settings = {
    noDataMessage: '',
    actions: {
      position: 'right',
      add: false,
      delete: false,
      edit: false
    },
    mode: 'external',
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      surname: {
        title: 'Surname',
        type: 'string',
      },
      birthDate: {
        title: 'Birth date',
        type: 'string',
      },
      phone: {
        title: 'Phone number',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  
  constructor(private descriptionService: DescriptionService,
    private http: HttpClient,
    private router: Router){ }

  getData() {
    this.http.get('http://localhost:8080/getlst').subscribe(
      data => {
        this.source.load(JSON.parse(JSON.stringify(data)));
      },
    );
  }

  ngOnInit(){
    this.getData();
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

    window.location.reload();
  }
}
