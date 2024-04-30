import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Import AppModule
import { UserListComponent } from './app/user-list/user-list.component'; // Import UserListComponent
import { UserDetailsComponent } from './app/user-details/user-details.component'; // Import UserDetailsComponent

 enableProdMode();


const routes = [
  { path: '', component:AppComponent}, // Default route
  { path: 'user-list', component: UserListComponent },
  { path: 'user-details/:userId', component: UserDetailsComponent }, // Define route for UserDetailsComponent with a parameter userId
];

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
