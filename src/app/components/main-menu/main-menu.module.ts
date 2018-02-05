import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainMenuComponent } from './main-menu.component';
import { CreateUserComponent } from '../create-user/create-user.component';
import { UiComponentsModule } from '../../ui-components/ui-components.module';
import { MaterialModule } from '../../material.module';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'create-user', component: CreateUserComponent }
];

@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    UiComponentsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    MainMenuComponent
  ]
})
export class MainMenuModule {}
