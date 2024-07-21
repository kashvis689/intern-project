import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { UserService } from '../../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

/**
 * Component for adding or editing a user.
 */
@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})


export class AddEditUserComponent implements OnInit {

  /**
   * Event emitted when a user is saved.
   */
  @Output() userSaved = new EventEmitter<User>();

  /**
   * Form group for user details.
   */
  userForm: FormGroup;

  /**
   * Title for the component.
   */
  title = 'Add/ Edit User';

  /**
   * Static user instance for use within the component.
   */
  public static _user_in: User = UserService.nullUser();

  /**
   * Flag indicating if the component is in edit mode.
   */
  public static isEdit = false;

  /**
   * Index of the user being edited.
   */
  public static idx = -1;

  /**
   * Dummy user instance for testing or placeholder purposes.
   */
  dummyUser: User = new User("First", "Last", "user", "password", new Date(2005, 6, 17),"Male");

  /**
   * Route for accessing route parameters or data.
   */
  route: ActivatedRoute = new ActivatedRoute();

  /**
   * Creates an instance of the AddEditUserComponent.
   * @param fb - FormBuilder service for building reactive forms.
   * @param userService - Service for user-related operations.
   */
  constructor(private fb: FormBuilder, private userService: UserService) {
    if (!AddEditUserComponent._user_in){
      AddEditUserComponent._user_in = UserService.nullUser();
    }
    console.log(AddEditUserComponent._user_in, AddEditUserComponent.idx, AddEditUserComponent.isEdit);
    this.userForm = this.fb.group({
      firstName: [AddEditUserComponent._user_in.firstName, Validators.required],
      lastName: [AddEditUserComponent._user_in.lastName, Validators.required],
      username: [AddEditUserComponent._user_in.username, [Validators.required, Validators.minLength(6)]],
      password: [AddEditUserComponent._user_in.password, [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$'), Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      dob: [AddEditUserComponent._user_in.dob, Validators.required],
      gender: [AddEditUserComponent._user_in.gender, Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  /**
   * Lifecycle hook that is called after the component is initialized.
   */
  ngOnInit(): void {}

  /**
   * Handles form submission for adding or editing a user. First ti checks if the form is invalid, then it gets the values from the form and checks if the username already exists. If the username exists, it sets an error on the username form control. If the username does not exist, it gets the user object from the form and adds it to the user service. If the component is in edit mode, it updates the user in the user service. Finally, it emits the userSaved event and resets the form.
   */
  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }

    const password = this.userForm.get('password')?.value;
    const username = this.userForm.get('username')?.value;

    if (UserService.getUsers().some(u => u.username === username)) {
      if (!AddEditUserComponent.isEdit){
        this.userForm.get('username')?.setErrors({ usernameExists: true });
        return;
      }
    }

    const user = { ...this.userForm.value } as User;

    if (AddEditUserComponent.isEdit && AddEditUserComponent.idx >= 0) {
      UserService.updateUser(AddEditUserComponent.idx, user);
      console.log('User updated!');
    } else {
      UserService.addUser(user); // Method to add the user in the service
      console.log('User added!');
    }
    console.log(user);

    AddEditUserComponent._user_in = UserService.nullUser();
    AddEditUserComponent.idx = -1;
    AddEditUserComponent.isEdit = false;

    this.userSaved.emit(user);
    this.resetForm();
  }

  /**
   * Resets the user form to its initial state. All values will be set to empty string
   */
  resetForm(): void {
    this.userForm.reset({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
      dob: new Date(),
      gender: ''
    });
  }

  /**
   * Gets the form control for the first name.
   * @returns The form control for the first name.
   */
  get firstName() {
    return this.userForm.get('firstName');
  }

  /**
   * Gets the form control for the last name.
   * @returns The form control for the last name.
   */
  get lastName() {
    return this.userForm.get('lastName');
  }

  /**
   * Gets the form control for the username.
   * @returns The form control for the username.
   */
  get username() {
    return this.userForm.get('username');
  }

  /**
   * Gets the form control for the password.
   * @returns The form control for the password.
   */
  get password() {
    return this.userForm.get('password');
  }

  /**
   * Gets the form control for the confirm password.
   * @returns The form control for the confirm password.
   */
  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }

  /**
   * Gets the form control for the date of birth.
   * @returns The form control for the date of birth.
   */
  get dob() {
    return this.userForm.get('dob');
  }

  /**
   * Gets the form control for the gender.
   * @returns The form control for the gender.
   */
  get gender() {
    return this.userForm.get('gender');
  }

  /**
   * Populates the user service with dummy users.
   */
  populate(){
    let ln = UserService.getUsers().length;
    for (let index = ln; index < ln + 3; index++) {
      this.dummyUser = new User("First"+index, "Last"+index, "username"+index, "password"+index, new Date(2005, 6, 17),"Male");
      UserService.addUser(this.dummyUser);
      console.log("User added !!!");
    }
    for (let index = ln+3; index < ln + 6; index++) {
      this.dummyUser = new User("First"+index, "Last"+index, "username"+index, "password"+index, new Date(2005, 6, 17),"Female");
      UserService.addUser(this.dummyUser);
      console.log("User added !!!");
    }
  }

  /**
   * Validator function to check if password and confirm password fields match.
   * @param formGroup - The form group containing password and confirmPassword controls.
   * @returns Validation error object if passwords do not match, otherwise null.
   */
  passwordMatchValidator: ValidatorFn = (formGroup: AbstractControl): { [key: string]: boolean } | null => {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    if (password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  };
}
