import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MyElementComponent } from './my-element/my-element.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'v6-welcom2';
	constructor(private injector: Injector) {}
	ngOnInit() {
		let myElement = createCustomElement(MyElementComponent, { injector: this.injector });
		customElements.define('my-element', myElement);
	}
}
