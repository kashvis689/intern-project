import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';

/**
 * Array of route definitions for the application.
 * - `path`: The URL path for the route.
 * - `component`: The component associated with the route.
 */
const routes: Routes = [
  /** Route for the home component. */
  { path: 'home', component: HomeComponent },

  /** Route for adding or editing a user. */
  { path: 'add-edit-user', component: AddEditUserComponent },

  /** Route for listing users. */
  { path: 'list-user', component: ListUserComponent },

  /** Default route redirecting to the home component. */
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

/**
 * The AppRoutingModule is responsible for configuring the router and
 * defining the routes for the application.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
