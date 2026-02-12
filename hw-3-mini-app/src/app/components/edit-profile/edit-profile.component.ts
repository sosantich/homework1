import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    MatButtonModule,
  ],
  templateUrl: './edit-profile.component.html',
})
export class EditProfile {
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditProfile>,
    @Inject(MAT_DIALOG_DATA) public data: UserData,
  ) {
    this.form = this.fb.group({
      firstName: [data.name.first, [Validators.required]],
      lastName: [data.name.last, [Validators.required]],
      email: [data.email, [Validators.required, Validators.email]],
      phone: [data.phone, [Validators.required]],
      city: [data.location.city, [Validators.required]],
      state: [data.location.state, [Validators.required]],
    });
  }

  save() {
    if (this.form.invalid) return;

    const updatedUser: UserData = {
      ...this.data,
      name: {
        ...this.data.name,
        first: this.form.value.firstName,
        last: this.form.value.lastName,
      },
      email: this.form.value.email,
      phone: this.form.value.phone,
      location: {
        ...this.data.location,
        city: this.form.value.city,
        state: this.form.value.state,
      },
    };

    this.dialogRef.close(updatedUser);
  }
}
