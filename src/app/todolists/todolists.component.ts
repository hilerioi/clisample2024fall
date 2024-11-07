import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoproxyService } from '../todoproxy.service';
import { Router} from '@angular/router';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrl: './todolists.component.css'
})
export class TodolistsComponent {
  displayedColumns: string[] = ['name', 'description', 'due', 'state', 'owner'];
  dataSource = new MatTableDataSource<any>();

  constructor(private router: Router, proxy$: TodoproxyService) {

    proxy$.getListsIndex().subscribe( (result: any[]) => 
    {
      this.dataSource = new MatTableDataSource<any>(result);
      //this.dataSource.sort = this.sort;
      console.log("retrieved data from server.");
    });
  }

  ngOnInit() {
  }

  clickEvent(): void {
    this.router.navigate(['']);
  }

  // listsObservable: Observable<any[]>;

  // constructor(private router: Router, proxy$: TodoproxyService) {
  //   this.listsObservable = proxy$.getListsIndex();
  // }

  // ngOnInit() {
  // }

  // clickEvent(): void {
  //   this.router.navigate(['']);
  // }

}
