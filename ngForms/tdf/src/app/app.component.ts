import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdf';
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('Rob', 'email@ddd.com', 123231212, '', 'morning', true);
}
