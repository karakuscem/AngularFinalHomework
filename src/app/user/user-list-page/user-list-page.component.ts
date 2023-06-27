import { Component } from '@angular/core';
import { User } from '../user';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent {
  columns: string[] = ['ID', 'USERNAME', 'EMAIL', 'DATE', 'ACTIVE', 'EDIT'];
  data: User[] = [];
  editMode: boolean = false;
  userId: number = 0;
  username: string = '';
  email: string = '';
  date: string = '';
  active: boolean = false;
  placeHolderUsername: string = '';
  placeHolderEmail: string = '';

  constructor(private userService: UserManagementService) {
    this.data = this.userService.getUsers();
    if (this.data.length === 0) {
      this.userService.setUsers();
      this.data = this.userService.getUsers();
    }
  }

  handleDeleteClick($event: number): void {
    if (this.data.length === 1)
      alert('You cannot delete the last user!');
    else if (confirm('Are you sure you want to delete this user?'))
    {
      this.userService.deleteUser(Number($event));
      this.data = this.userService.getUsers();
    }
  }

  handleEditClick($event: number): void {
    this.editMode = true;
    this.userId = Number($event);
    this.placeHolderUsername = this.userService.getUserByID(this.userId)!.USERNAME.toUpperCase();
    this.placeHolderEmail = this.userService.getUserByID(this.userId)!.EMAIL.toUpperCase();
  }

  handleCancelClick(): void {
    this.userId = 0;
    this.username = '';
    this.email = '';
    this.date = '';
    this.active = false;
    this.editMode = false;
  }

  handleSaveClick(): void {
    if (this.username === '' || this.email === '' || this.date === '')
      alert('Please fill out all fields!');
    else if (this.userService.getUserByUsername(this.username)
      && this.userService.getUserByUsername(this.username.toLowerCase())!.ID !== this.userId)
      alert('Username already exists!');
    else if (this.userService.getUserByEmail(this.email)
      && this.userService.getUserByEmail(this.email.toLowerCase())!.ID !== this.userId)
      alert('Email already exists!');
    else {
      this.date = new Date(this.date).toLocaleDateString();
      this.userService.updateUser(this.userId, this.username, this.email, this.date, this.active);
      this.data = this.userService.getUsers();
      this.editMode = false;
    }
  }
}
