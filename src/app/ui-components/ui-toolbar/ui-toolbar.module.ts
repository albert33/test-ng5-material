import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { UiToolbarComponent } from './ui-toolbar.component';

@NgModule({
  declarations: [
    UiToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UiToolbarComponent
  ]
})
export class UiToolbarModule {}
