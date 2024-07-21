
ListUserComponent \| intern\-project* Preparing search index...
* The search index is not available

[intern\-project](../index.md)* [intern\-project](../index.md)
* [app/components/list\-user/list\-user.component](../modules/app_components_list_user_list_user_component.md)
* [ListUserComponent](app_components_list_user_list_user_component.ListUserComponent.md)

# Class ListUserComponent

Component for listing users.


#### Implements

* OnInit
* Defined in app/components/list\-user/list\-user.component.ts:15
##### Index

### Constructors

[constructor](app_components_list_user_list_user_component.ListUserComponent.md#constructor)
### Properties

[ColList](app_components_list_user_list_user_component.ListUserComponent.md#ColList)
[router](app_components_list_user_list_user_component.ListUserComponent.md#router)
[title](app_components_list_user_list_user_component.ListUserComponent.md#title)
[users](app_components_list_user_list_user_component.ListUserComponent.md#users)
### Methods

[edit](app_components_list_user_list_user_component.ListUserComponent.md#edit)
[getDob](app_components_list_user_list_user_component.ListUserComponent.md#getDob)
[ngOnInit](app_components_list_user_list_user_component.ListUserComponent.md#ngOnInit)
[onDelete](app_components_list_user_list_user_component.ListUserComponent.md#onDelete)
## Constructors

### constructor

* new ListUserComponent(): [ListUserComponent](app_components_list_user_list_user_component.ListUserComponent.md)
* Creates an instance of ListUserComponent.


#### Returns [ListUserComponent](app_components_list_user_list_user_component.ListUserComponent.md)


	+ Defined in app/components/list\-user/list\-user.component.ts:39
## Properties

### ColList

ColList: string\[] \= UserService.fieldsList of column names to be displayed.


* Defined in app/components/list\-user/list\-user.component.ts:24
### router

router: Router \= ...Router instance for navigation.


* Defined in app/components/list\-user/list\-user.component.ts:34
### title

title: string \= 'List of Users'Title of the component.


* Defined in app/components/list\-user/list\-user.component.ts:19
### users

users: [User](app_components_user.User.md)\[] \= ...List of users fetched from the UserService.


* Defined in app/components/list\-user/list\-user.component.ts:29
## Methods

### edit

* edit(idx): void
* Navigates to the add\-edit\-user component for editing a user.


#### Parameters


	+ idx: numberThe index of the user to edit.#### Returns void


	+ Defined in app/components/list\-user/list\-user.component.ts:61
### getDob

* getDob(user): void
* Gets the date of birth of the user in a formatted string.


#### Parameters


	+ user: [User](app_components_user.User.md)The user object.#### Returns void


	+ Defined in app/components/list\-user/list\-user.component.ts:72
### ngOnInit

* ngOnInit(): void
* Lifecycle hook that is called after the component is initialized.


#### Returns void

Implementation of OnInit.ngOnInit


	+ Defined in app/components/list\-user/list\-user.component.ts:46
### onDelete

* onDelete(idx): void
* Deletes a user at the specified index.


#### Parameters


	+ idx: numberThe index of the user to delete.#### Returns void


	+ Defined in app/components/list\-user/list\-user.component.ts:52
### Settings

Member Visibility* Protected
* Inherited
* External
ThemeOSLightDark### On This Page

Constructors[constructor](#constructor)Properties[ColList](#ColList)[router](#router)[title](#title)[users](#users)Methods[edit](#edit)[getDob](#getDob)[ngOnInit](#ngOnInit)[onDelete](#onDelete)[intern\-project](../index.md)* Loading...
Generated using [TypeDoc](https://typedoc.org/)


