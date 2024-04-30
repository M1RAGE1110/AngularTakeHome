import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component'; 
import { AppComponent } from './app.component';
import { appConfig } from './app.config';

const routes: Routes = [
  { path: '', component:AppComponent}, // Default route
  { path: 'user-list', component: UserListComponent },
  { path: 'user-details/:userId', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
