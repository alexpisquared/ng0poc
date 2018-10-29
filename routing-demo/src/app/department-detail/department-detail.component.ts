import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `    <h3>      You selected dprt with id = {{depaId}}    </h3>  
  <a (click)='goPrev()'>Prev</a>
  <a (click)='goNext()'>Next</a>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public depaId;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.depaId = id;
    });
  }

  goPrev() {
    let newId = this.depaId - 1;
    this.router.navigate(['/departments', newId]);
  }
  goNext() {
    let newId = this.depaId + 1;
    this.router.navigate(['/departments', newId]);
  }
}
