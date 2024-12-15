import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RedHeadingDirective } from './red-heading.directive';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { UserdataService } from '../services/userdata.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RedHeadingDirective, RouterOutlet, RouterModule, HttpClientModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  productId: string | null = null;
  getUsersData: any = []


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')
  }

  loginform = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.email, Validators.minLength(20)]),
    password: new FormControl("", [Validators.required])
  })
  getUserData() {
    console.table(this.loginform.value)
  }
  get username() {
    return this.loginform.get("username")
  }
}
