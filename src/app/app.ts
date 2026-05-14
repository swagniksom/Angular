import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {header} from './header';
import { UserComponent } from './user-component/user-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, header, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('app1');
}
