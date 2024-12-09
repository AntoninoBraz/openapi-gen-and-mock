import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pet, PetsService } from '../../../api/auto-gen';

@Component({
  selector: 'app-api-usage-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-usage-demo.component.html',
  styleUrl: './api-usage-demo.component.scss',
})
export class ApiUsageDemoComponent {
  petService = inject(PetsService);
  pets = signal<Pet[]>([]);
  JSON = JSON;

  constructor() {
    this.petService.listPets().subscribe({
      next: (pets: Pet[]) => {
        this.pets.set(pets);
      },
      error() {},
    });
  }

  createPets() {
    this.petService.createPets().subscribe({
      next: (res) => {
        console.log(res);
      },
      error() {},
    });
  }
}
