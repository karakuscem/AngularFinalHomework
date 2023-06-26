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
}
