import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-list',
  template: `
    <h3>      user-list works!    </h3>
    <ul class='items'>
      <li (click)='onSelect(user)' [class.selected]='isSelected(user)' *ngFor='let user of userList'>
        <span class='badge'>{{user.id}}</span> {{user.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class UserListComponent implements OnInit {
  public selectedId;
  userList = [
    { id: 1, name: 'Angular Name' },
    { id: 2, name: 'Node JS Name' },
    { id: 3, name: 'MongoDB Name' },
    { id: 4, name: 'Materia Name' }
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(user) {
    this.router.navigate(['/users', user.id]);
  }

  isSelected(user){
    return user.id === this.selectedId;
  }
}
