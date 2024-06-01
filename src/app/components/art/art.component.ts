import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-art',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './art.component.html',
  styleUrl: './art.component.css',
})
export class ArtComponent {
  public artAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.artAddForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      name2: ['', [Validators.required]],
      file: ['', [Validators.required]], 
    });
  }
  addArt() {
    console.log(this.artAddForm.value);
  }
}
