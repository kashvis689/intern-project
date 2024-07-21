import { Injectable } from '@angular/core';
import { User } from './components/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * List of users.
   */
  private static users: User[] = [];

  /**
   * List of fields for user attributes to be displayed at the top of the table
   */
  public static fields: string[] = ['Name', 'Username', 'Password', 'DOB', 'Gender(binary)'];

  /**
   * Local storage item for users.
   */
  public static localItem: string;

  /**
   * Creates an instance of UserService and loads users from file.
   */
  constructor() {
    UserService.loadUsersFromFile();
  }

  /**
   * Loads users from the local storage.
   * If no users are found, initializes an empty array.
   */
  public static loadUsersFromFile(): void {
    UserService.localItem = localStorage.getItem('users')?.toString() || '';
    if (UserService.localItem) {
      UserService.users = JSON.parse(UserService.localItem);
    } else {
      UserService.users = [];
    }
  }

  /**
   * Saves the current users to the local storage.
   */
  public static saveUsersToFile(): void {
    localStorage.setItem('users', JSON.stringify(UserService.users));
  }

  /**
   * Updates a user at the specified index.
   * If the index is out of bounds, adds the user to the list.
   * After the changes are made, the new list is saved to the local storage.
   * @param idx - The index of the user to update.
   * @param user - The user object with updated data.
   */
  public static updateUser(idx: number, user: User): void {
    if (idx >= 0 && idx < this.users.length) {
      // if ((UserService.getUsers().findIndex(u => u.username === user.username) !== -1) || (UserService.getUsers().findIndex(u => u.username === user.username) !== idx)) {
      //   console.log('ERROR1');
      //   return;
      // }
      this.users[idx] = user;
    } else {
      this.addUser(user);
    }
    UserService.saveUsersToFile();
  }

  /**
   * Gets the list of users.
   * @returns An array of user objects.
   */
  public static getUsers(): User[] {
    UserService.loadUsersFromFile();
    return UserService.users;
  }

  /**
   * Returns a null user object with default values. This is used for dummy purposes, and is not stored in list of users.
   * @returns A user object with empty and default values.
   */
  public static nullUser(): User {
    return new User("", "", "", "", new Date(), "Male");
  }

  /**
   * Adds a user to the list if the username does not already exist.
   * @param _user - The user object to add.
   */
  public static addUser(_user: User): void {
    if (UserService.getUsers().findIndex(u => u.username === _user.username) !== -1) {
      return;
    }
    UserService.users.push(_user);
    UserService.saveUsersToFile();
  }

  /**
   * Deletes a user at the specified index.
   * @param idx - The index of the user to delete.
   */
  public static deleteUser(idx: number): void {
    UserService.users.splice(idx, 1);
    UserService.saveUsersToFile();
  }
}
