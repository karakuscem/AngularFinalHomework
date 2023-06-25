import { Component } from '@angular/core';
import { User } from '../user';
import { UserManagementService } from '../user-management.service';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent {
  columns: string[] = ['ID', 'USERNAME', 'EMAIL', 'DATE', 'ACTIVE'];
  data: User[] = [];

  constructor(private userService: UserManagementService) {
    if (this.userService.getUsers().length === 0) {
      this.userService.setUsers();
    } else {
      this.data = this.userService.getUsers();
    }
    console.log(this.data);
  }
}
