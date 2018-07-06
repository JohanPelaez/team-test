import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { User, jobTitle } from '../user';

import { USERS } from '../mock-users';

@Component({
  selector: 'table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent implements OnInit {
  users = new MatTableDataSource(USERS);
  displayedColumns: string[] = [
    'name',
    'age',
    'username',
    'hireDate',
    'actions'
  ];

  jobTitles = jobTitle;

  @ViewChild(MatSort) sort: MatSort;
  constructor() {}

  ngOnInit() {
    this.users.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.users.filter = filterValue.trim().toLowerCase();
  }

  editUser(user: User): void {}
  viewUser(user: User): void {}
  deleteUser(user: User): void {}
}
