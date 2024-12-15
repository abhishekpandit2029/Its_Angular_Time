import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from "./profile/profile.component"
import { AuthModule } from "./auth/auth.module"
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AppPipe } from "./app.pipe";
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, ProfileComponent, AuthModule, DashboardComponent, CommonModule, FormsModule, AppPipe], // import ProfileComponent to see ProfileComponent data in app page 

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularlearning';
  date = new Date()
  displayValue = ""
  username = "abhi@123"
  usernameDisabled = false
  show = false
  color = "red"
  count = 0
  user = ["anil", "sam", "om", "dev"]
  textcolor = "red"
  toggleval = false
  surname = "pandit"
  name: string = ""
  jsonUser = {
    name: "abhi",
    age: 12
  }

  getData() {
    return "Get data return"
  }
  getName(name: string) {
    alert(name)
  }
  getInput(input: string) {
    console.log("input", input)
  }
  getValue(value: string) {
    this.displayValue = value
  }
  counter(type: string) {
    type === "add" ? this.count++ : this.count--
  }
  getUserData(data: NgForm) {
    console.table(data)
  }
  // togglefunc
  toggle() {
    this.toggleval = !this.toggleval
  }
  childtoparent(item: string) {
    alert(item)
  }
}
