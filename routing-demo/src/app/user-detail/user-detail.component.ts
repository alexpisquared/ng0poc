import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  template: `    <h3>      You selected user with id = {{userId}}    </h3>  
  
  <p>
  <button (click)='showOverview()'>Overview</button>
  <button (click)='showContact()'>Contact</button>
  </p>
  <router-outlet></router-outlet>
  <p>
  <button (click)='goPrev()'>Prev</button> -+-
  <button (click)='goNext()'>Next</button>
  </p>
  <div><button (click)='gotoUsers()'>Back</button></div>
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
    this.router.navigate(['/users', newId], { relativeTo: this.route }); // this.router.navigate(['/users', newId]);
  }
  goNext() {
    let newId = this.userId + 1;
    this.router.navigate(['/users', newId], { relativeTo: this.route }); // this.router.navigate(['/users', newId]);
  }
  gotoUsers() {
    let selectedId = this.userId ? this.userId : null;
    this.router.navigate(['../', { id: selectedId }], {
      relativeTo: this.route
    }); // this.router.navigate(['/users', { id: selectedId }]);
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
