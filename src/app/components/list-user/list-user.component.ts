import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { AddEditUserComponent } from '../add-edit-user/add-edit-user.component';

/**
 * Component for listing users.
 */
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class ListUserComponent implements OnInit {
  /**
   * Title of the component.
   */
  title: string = 'List of Users';

  /**
   * List of column names to be displayed, fetched from UserService having a sstatic variable named feilds.
   */
  ColList: string[] = UserService.fields;

  /**
   * List of users fetched from the UserService.
   */
  users = UserService.getUsers();

  /**
   * Router instance for navigation.
   */
  router: Router = new Router();

  /**
   * Creates an instance of ListUserComponent. Just gets the most recent list of users from the UserService.
   */
  constructor() {
    this.users = UserService.getUsers();
  }

  /**
   * Lifecycle hook that is called after the component is initialized.
   */
  ngOnInit(): void {}

  /**
   * Deletes a user at the specified index.
   * @param idx - The index of the user to delete.
   */
  onDelete(idx: number): void {
    UserService.deleteUser(idx);
    this.users = UserService.getUsers();
  }

  /**
   * Navigates to the add-edit-user component for editing a user.
   * It first sets the user to edit, its index in the users list and a boolean isEdit as true in the AddEditUserComponent and then navigates to the component.
   * @param idx - The index of the user to edit.
   */
  edit(idx: number): void {
    AddEditUserComponent._user_in = UserService.getUsers()[idx];
    AddEditUserComponent.isEdit = true;
    AddEditUserComponent.idx = idx;
    this.router.navigate(['add-edit-user']);
  }
  getGenderIcon(gender: string){

  }
}
