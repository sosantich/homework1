import { Component } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User, UserData } from '../../interfaces/user.interface';
import { NameUppercasePipe } from '../../pipes/name-uppercase.pipe';
import { NumberPipe } from '../../pipes/number.pipe';
import { EditProfile } from '../edit-profile/edit-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'profile',
  imports: [CommonModule, NameUppercasePipe, NumberPipe, MatButtonModule, TitleCasePipe],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
  ) {
    this.userService.getUsers().subscribe((user) => {
      this.userSubject.next(user);
    });
  }

  edit(user: UserData) {
    const dialogRef = this.dialog.open(EditProfile, {
      width: '250px',
      data: user,
    });

    dialogRef.afterClosed().subscribe((updatedUser: UserData | undefined) => {
      if (!updatedUser) return;

      const current = this.userSubject.value;
      if (!current) return;

      const newUser: User = {
        ...current,
        results: [
          {
            user: { ...updatedUser },
          },
        ],
      };

      this.userSubject.next(newUser);
    });
  }
}
