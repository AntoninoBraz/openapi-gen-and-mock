import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiModule } from '../api/auto-gen';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ApiModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'OpenapiAutoGenerator';
}
