import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-user',
  styleUrls: ['create-user.component.css'],
  templateUrl: 'create-user.component.html'
})
export class CreateUserComponent {
    uitoolbar: Object = {
        title: String,
        type: String // ['primary','secondary']
    };
    constructor() { }
    ngOnInit() {
        this.uitoolbar = {
            title: 'Create user',
            type: 'primary'
        }
    }
}
