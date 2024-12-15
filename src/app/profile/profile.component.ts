import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input() surname = "undefined"
  hi = "hi abhishek"
  @Output() childtoparentEvent = new EventEmitter<string>()
}
