import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
