
AddEditUserComponent \| intern\-project* Preparing search index...
* The search index is not available

[intern\-project](../index.md)* [intern\-project](../index.md)
* [app/components/add\-edit\-user/add\-edit\-user.component](../modules/app_components_add_edit_user_add_edit_user_component.md)
* [AddEditUserComponent](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md)

# Class AddEditUserComponent

Component for adding or editing a user.


#### Implements

* OnInit
* Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:17
##### Index

### Constructors

[constructor](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#constructor)
### Properties

[dummyUser](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#dummyUser)
[passwordMatchValidator](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#passwordMatchValidator)
[route](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#route)
[title](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#title)
[userForm](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#userForm)
[userSaved](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#userSaved)
[\_user\_in](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#_user_in)
[idx](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#idx)
[isEdit](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#isEdit)
### Accessors

[confirmPassword](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#confirmPassword)
[dob](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#dob)
[firstName](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#firstName)
[gender](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#gender)
[lastName](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#lastName)
[password](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#password)
[username](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#username)
### Methods

[ngOnInit](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#ngOnInit)
[onSubmit](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#onSubmit)
[populate](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#populate)
[resetForm](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md#resetForm)
## Constructors

### constructor

* new AddEditUserComponent(fb, userService): [AddEditUserComponent](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md)
* Creates an instance of the AddEditUserComponent.


#### Parameters


	+ fb: FormBuilderFormBuilder service for building reactive forms.
	+ userService: [UserService](app_user_service.UserService.md)Service for user\-related operations.#### Returns [AddEditUserComponent](app_components_add_edit_user_add_edit_user_component.AddEditUserComponent.md)


	+ Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:64
## Properties

### dummyUser

dummyUser: [User](app_components_user.User.md) \= ...Dummy user instance for testing or placeholder purposes.


* Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:52
### passwordMatchValidator

passwordMatchValidator: ValidatorFn \= ...Validator function to check if password and confirm password fields match.


#### Param: formGroup

The form group containing password and confirmPassword controls.


#### Returns

Validation error object if passwords do not match, otherwise null.


* Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:215
### route

route: ActivatedRoute \= ...Route for accessing route parameters or data.


* Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:57
### title

title: string \= 'Add/ Edit User'Title for the component.


* Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:32
### userForm

userForm: FormGroup\<any\>Form group for user details.


* Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:27
### userSaved

userSaved: EventEmitter\<[User](app_components_user.User.md)\> \= ...Event emitted when a user is saved.


* Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:22
### `Static`\_user\_in

\_user\_in: [User](app_components_user.User.md) \= ...Static user instance for use within the component.


* Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:37
### `Static`idx

idx: number \= \-1Index of the user being edited.


* Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:47
### `Static`isEdit

isEdit: boolean \= falseFlag indicating if the component is in edit mode.


* Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:42
## Accessors

### confirmPassword

* get confirmPassword(): null \| AbstractControl\<any, any\>
* Gets the form control for the confirm password.


#### Returns null \| AbstractControl\<any, any\>

The form control for the confirm password.



	+ Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:173
### dob

* get dob(): null \| AbstractControl\<any, any\>
* Gets the form control for the date of birth.


#### Returns null \| AbstractControl\<any, any\>

The form control for the date of birth.



	+ Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:181
### firstName

* get firstName(): null \| AbstractControl\<any, any\>
* Gets the form control for the first name.


#### Returns null \| AbstractControl\<any, any\>

The form control for the first name.



	+ Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:141
### gender

* get gender(): null \| AbstractControl\<any, any\>
* Gets the form control for the gender.


#### Returns null \| AbstractControl\<any, any\>

The form control for the gender.



	+ Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:189
### lastName

* get lastName(): null \| AbstractControl\<any, any\>
* Gets the form control for the last name.


#### Returns null \| AbstractControl\<any, any\>

The form control for the last name.



	+ Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:149
### password

* get password(): null \| AbstractControl\<any, any\>
* Gets the form control for the password.


#### Returns null \| AbstractControl\<any, any\>

The form control for the password.



	+ Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:165
### username

* get username(): null \| AbstractControl\<any, any\>
* Gets the form control for the username.


#### Returns null \| AbstractControl\<any, any\>

The form control for the username.



	+ Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:157
## Methods

### ngOnInit

* ngOnInit(): void
* Lifecycle hook that is called after the component is initialized.


#### Returns void

Implementation of OnInit.ngOnInit


	+ Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:83
### onSubmit

* onSubmit(): void
* Handles form submission for adding or editing a user.


#### Returns void


	+ Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:88
### populate

* populate(): void
* Populates the user service with dummy users.


#### Returns void


	+ Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:196
### resetForm

* resetForm(): void
* Resets the user form to its initial state.


#### Returns void


	+ Defined in app/components/add\-edit\-user/add\-edit\-user.component.ts:125
### Settings

Member Visibility* Protected
* Inherited
* External
ThemeOSLightDark### On This Page

Constructors[constructor](#constructor)Properties[dummyUser](#dummyUser)[passwordMatchValidator](#passwordMatchValidator)[route](#route)[title](#title)[userForm](#userForm)[userSaved](#userSaved)[\_user\_in](#_user_in)[idx](#idx)[isEdit](#isEdit)Accessors[confirmPassword](#confirmPassword)[dob](#dob)[firstName](#firstName)[gender](#gender)[lastName](#lastName)[password](#password)[username](#username)Methods[ngOnInit](#ngOnInit)[onSubmit](#onSubmit)[populate](#populate)[resetForm](#resetForm)[intern\-project](../index.md)* Loading...
Generated using [TypeDoc](https://typedoc.org/)


