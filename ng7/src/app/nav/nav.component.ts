import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  appTitle: string = "my app title"; // <- typescript way ... as opposed to JS way: appTitle = "my app title";

  constructor() {}

  ngOnInit() {}
}
