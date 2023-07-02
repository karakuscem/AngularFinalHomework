import { Injectable } from '@angular/core';
import { User } from './user';
import { usersInfo } from 'src/assets/default-users';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  private users: User[] = [];

  getUsers(): User[] {
    if (localStorage.getItem('users') !== null) {
      this.users = JSON.parse(localStorage.getItem('users') || '{}');
    } else {
      this.setUsers();
    }
    return this.users;
  }

  setUsers(): void {
    this.users = usersInfo;
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.ID !== id);
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  getUserByUsername(username: string): User | undefined {
    return this.users.find((user) => user.USERNAME === username);
  }

  getUserByEmail(email: string): User | undefined {
    return this.users.find((user) => user.EMAIL === email);
  }

  getUserByID(id: number): User | undefined {
    return this.users.find((user) => user.ID === id);
  }

  updateUser(id: number, username: string, email: string, date: string, active: boolean): void {
    const user = this.getUserByID(id);
    if (user) {
      user.USERNAME = username;
      user.EMAIL = email;
      user.DATE = date;
      user.ACTIVE = Boolean(active);
    }
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  addUser(username: string, email: string, active: boolean, date: string): void {
    const id = this.users[this.users.length - 1].ID + 1;
    const user: User = {
      ID: id,
      USERNAME: username,
      EMAIL: email,
      DATE: date,
      ACTIVE: active
    };
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
