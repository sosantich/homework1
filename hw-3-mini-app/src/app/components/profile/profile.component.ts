import { Component } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';
import { Observable } from 'rxjs';
import { NameUppercasePipe } from '../../pipes/name-uppercase.pipe';
import { AgeIncrementPipe } from '../../pipes/age-increment.pipe';

@Component({
  selector: 'profile',
  imports: [CommonModule, NameUppercasePipe, AgeIncrementPipe],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user$: Observable<User>;

  constructor(private userService: UserService) {
    this.user$ = this.userService.getUsers();
  }
}
