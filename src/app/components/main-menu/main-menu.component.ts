import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-menu',
  styleUrls: ['main-menu.component.css'],
  template: `
    <div class="main-menu">
        <!-- Header -->
        <ui-toolbar [data]="uitoolbar"></ui-toolbar>
        <!-- Users menu -->
        <div class="card w-50 users-menu">
            <div class="card-block bg-info text-white">
                <h4 class="card-title">User management</h4>
            </div>
            <div class="list-group list-group-flush">
                <a class="list-group-item list-group-item-action" routerLink="/create-user">
                    Create User
                </a>
                <a class="list-group-item list-group-item-action" routerLink="/search-user">
                    Search user
                </a>
                <a class="list-group-item list-group-item-action disabled">
                    Bulk management (unavailable)
                </a>
            </div>
        </div>
    </div>
  `
})
export class MainMenuComponent {
  uitoolbar: Object = {
      title: String,
      type: String // ['primary','secondary']
  };
  constructor() { }
  ngOnInit() {
      this.uitoolbar = {
          title: 'Main menu',
          type: 'primary'
      }
  }
}
