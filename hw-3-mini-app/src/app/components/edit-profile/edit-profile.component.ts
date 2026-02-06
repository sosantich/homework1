import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserData } from '../../interfaces/user.interface';

@Component({
  selector: 'app-edit-profile',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './edit-profile.component.html'
})
export class EditProfile {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditProfile>,
    @Inject(MAT_DIALOG_DATA) public data: UserData
  ) {
    this.form = this.fb.group({
      firstName: [data.name.first],
      lastName: [data.name.last],
      email: [data.email],
      phone: [data.phone],
      city: [data.location.city],
      country: [data.location.country]
    });
  }

  save() {
    this.dialogRef.close();
  }
}
