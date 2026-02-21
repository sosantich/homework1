import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from '../../interfaces/item.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-edit',
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatDialogModule],
  templateUrl: './item-edit.component.html',
})
export class ItemEditComponent {
  public form;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ItemEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item,
  ) {
    this.form = this.fb.group({
      image: [data.image, Validators.required],
      id: [data.id, Validators.required],
      name: [data.name, Validators.required],
      species: [data.species, Validators.required],
      status: [data.status, Validators.required],
      gender: [data.gender, Validators.required],
      origin: [data.origin, Validators.required],
      quote: [data.quote],
      author: [data.author],
    });
  }

  public save(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value as Item);
    }
  }
}
