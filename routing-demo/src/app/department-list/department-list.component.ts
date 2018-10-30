import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>      department-list works!    </h3>
    <ul class='items'>
      <li (click)='onSelect(department)' [class.selected]='isSelected(department)' *ngFor='let department of departmentList'>
        <span class='badge'>{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public selectedId;
  departmentList = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node JS' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'Material' }
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    this.router.navigate(['/departments', department.id]);
  }

  isSelected(department){
    return department.id === this.selectedId;
  }
}
