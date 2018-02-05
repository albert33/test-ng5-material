import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-toolbar',
  styleUrls: ['ui-toolbar.component.css'],
  template: `
        <mat-toolbar class="ui-toolbar w-100" color="primary">
            {{data.title}}
        </mat-toolbar>

  `
})
export class UiToolbarComponent {
  @Input()
  data: Object = {
    title: String,
    type: String
  }
}
