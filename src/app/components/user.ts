/**
 * Represents a user.
 */
export class User {
  // private static users: User[] = [];

  /**
   * The user's first name.
   */
  public firstName: string;

  /**
   * The user's last name.
   */
  public lastName: string;

  /**
   * The user's username.
   */
  public username: string;

  /**
   * The user's password.
   */
  public password: string;

  /**
   * The user's date of birth.
   */
  public dob: Date;

  /**
   * The user's gender.
   * 'Male' for male, 'Female' for female.
   */
  public gender: string;

  /**
   * Creates an instance of User.
   * @param firstName - The user's first name.
   * @param lastName - The user's last name.
   * @param username - The user's username.
   * @param password - The user's password.
   * @param dob - The user's date of birth.
   * @param gender - The user's gender.
   */
  constructor(firstName: string, lastName: string, username: string, password: string, dob: Date, gender: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.dob = dob;
    this.gender = gender;
  }

  /**
   * Returns a string representation of the user.
   * @returns A string describing the user.
   */
  toString(): string {
    return `User: ${this.firstName} ${this.lastName}, Username: ${this.username}, DOB: ${this.dob}, Gender: ${this.gender === 'Male' ? 'Male' : 'Female'}`;
  }

  /**
   * Sets the user's first name.
   * @param firstName - The user's first name.
   */
  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  /**
   * Sets the user's last name.
   * @param lastName - The user's last name.
   */
  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  /**
   * Sets the user's username.
   * @param username - The user's username.
   */
  setUsername(username: string): void {
    this.username = username;
  }

  /**
   * Sets the user's password.
   * @param password - The user's password.
   */
  setPassword(password: string): void {
    this.password = password;
  }

  /**
   * Sets the user's date of birth.
   * @param dob - The user's date of birth.
   */
  setDOB(dob: Date): void {
    this.dob = dob;
  }

  /**
   * Sets the user's gender.
   * @param gender - The user's gender.
   */
  setGender(gender: string): void {
    this.gender = gender;
  }
}
