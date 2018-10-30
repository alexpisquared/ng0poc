import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  template: `    <h3>      You selected dprt with id = {{userId}}    </h3>  
  <a (click)='goPrev()'>Prev</a> -+-
  <a (click)='goNext()'>Next</a>
  <div><button (click)=gotoUsers()>Back</button></div>
  `,
  styles: []
})
export class UserDetailComponent implements OnInit {
  public userId;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.userId = id;
    });
  }

  goPrev() {
    let newId = this.userId - 1;
    this.router.navigate(['/users', newId]);
  }
  goNext() {
    let newId = this.userId + 1;
    this.router.navigate(['/users', newId]);
  }
  gotoUsers() {
    let selectedId = this.userId ? this.userId : null;
    this.router.navigate(['/users', { id: selectedId }]);
  }
}
