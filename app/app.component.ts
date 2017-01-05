import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
      <h1 [textContent]="title"></h1>
	  <my-heroes></my-heroes>

	`
})
export class AppComponent {
	title = '<b>Tour of Heroes</b>'; 
}
