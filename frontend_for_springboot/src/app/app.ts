import { Component, signal } from '@angular/core';
import { SIGNAL } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = ('Full Stack Project By Aarsh');
}
