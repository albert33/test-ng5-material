// Basic imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Angular Material
import { MaterialModule } from './material.module';
// Custom ui-components
import { UiComponentsModule } from './ui-components/ui-components.module';
// Pages components/modules
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainMenuModule } from './components/main-menu/main-menu.module';
import { CreateUserModule } from './components/create-user/create-user.module';

import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', redirectTo: '/main-menu', pathMatch: 'full' },
    { path: 'main-menu', component: MainMenuComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    UiComponentsModule,
    MainMenuModule,
    CreateUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
