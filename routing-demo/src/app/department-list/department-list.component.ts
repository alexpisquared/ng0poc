import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>      department-list works!    </h3>
    <ul class='items'>
      <li (click)='onSelect(department)' *ngFor='let department of departmentList'>
        <span class='badge'>{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  departmentList = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node JS' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'Material' }
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  onSelect(department) {
    this.router.navigate(['/departments', department.id]);
  }
}
