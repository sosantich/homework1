import { Component } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';
import { Observable } from 'rxjs';
import { NameUppercasePipe } from '../../pipes/name-uppercase.pipe';
import { AgeIncrementPipe } from '../../pipes/age-increment.pipe';
import { EditProfile } from '../edit-profile/edit-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'profile',
  imports: [CommonModule, NameUppercasePipe, AgeIncrementPipe, MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user$: Observable<User>;
  constructor(
    private userService: UserService,
    private dialog: MatDialog
  ) {
    this.user$ = this.userService.getUsers();
  }

  edit(user: any) {
    this.dialog.open(EditProfile, {
      width: '250px',
      data: user
    });
  }
}