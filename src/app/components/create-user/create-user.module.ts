import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateUserComponent } from './create-user.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import {UiComponentsModule} from '../../ui-components/ui-components.module';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    UiComponentsModule,
    MaterialModule
  ],
  exports: [
    CreateUserComponent
  ]
})
export class CreateUserModule {}
