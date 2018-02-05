import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
      <div class="app container-fluid">
        <router-outlet></router-outlet>
      </div>
  `
})
export class AppComponent {}
