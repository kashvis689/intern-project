[intern\-project](../README.md)

# Class UserService

* Defined in app/user.service.ts:7
##### Index

### Constructors

[constructor](app_user_service.UserService.md#constructor)
### Properties

[fields](app_user_service.UserService.md#fields)
[localItem](app_user_service.UserService.md#localItem)
### Methods

[addUser](app_user_service.UserService.md#addUser)
[deleteUser](app_user_service.UserService.md#deleteUser)
[getUsers](app_user_service.UserService.md#getUsers)
[nullUser](app_user_service.UserService.md#nullUser)
[updateUser](app_user_service.UserService.md#updateUser)
## Constructors

### constructor

* new UserService(): [UserService](app_user_service.UserService.md)
* Creates an instance of UserService and loads users from file.


#### Returns [UserService](app_user_service.UserService.md)


	+ Defined in app/user.service.ts:26
## Properties

### `Static`fields

fields: string\[] \= ...List of fields for user attributes.


* Defined in app/user.service.ts:16
### `Static`localItem

localItem: stringLocal storage item for users.


* Defined in app/user.service.ts:21
## Methods

### `Static`addUser

* addUser(\_user): void
* Adds a user to the list if the username does not already exist.


#### Parameters


	+ \_user: [User](app_components_user.User.md)The user object to add.#### Returns void


	+ Defined in app/user.service.ts:89
### `Static`deleteUser

* deleteUser(idx): void
* Deletes a user at the specified index.


#### Parameters


	+ idx: numberThe index of the user to delete.#### Returns void


	+ Defined in app/user.service.ts:101
### `Static`getUsers

* getUsers(): [User](app_components_user.User.md)\[]
* Gets the list of users.


#### Returns [User](app_components_user.User.md)\[]

An array of user objects.



	+ Defined in app/user.service.ts:72
### `Static`nullUser

* nullUser(): [User](app_components_user.User.md)
* Returns a null user object with default values.


#### Returns [User](app_components_user.User.md)

A user object with empty and default values.



	+ Defined in app/user.service.ts:81
### `Static`updateUser

* updateUser(idx, user): void
* Updates a user at the specified index.
If the index is out of bounds, adds the user to the list.


#### Parameters


	+ idx: numberThe index of the user to update.
	+ user: [User](app_components_user.User.md)The user object with updated data.#### Returns void


	+ Defined in app/user.service.ts:56

Constructors[constructor](#constructor)Properties[fields](#fields)[localItem](#localItem)Methods[addUser](#addUser)[deleteUser](#deleteUser)[getUsers](#getUsers)[nullUser](#nullUser)[updateUser](#updateUser)[intern\-project](../README.md)


