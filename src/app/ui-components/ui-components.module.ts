import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiToolbarModule } from '../ui-components/ui-toolbar/ui-toolbar.module';

@NgModule({
  imports: [
      CommonModule,
      UiToolbarModule
  ],
  exports: [
      UiToolbarModule
  ]
})
export class UiComponentsModule { }
