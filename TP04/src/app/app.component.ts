import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardFormComponent } from './card-form/card-form.component';
import { CommonModule } from '@angular/common';
import { ModuleAffModule } from './module-aff/module-aff.module';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardFormComponent, CommonModule, ModuleAffModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cards: Card[] = [];

  onFormSubmit(data: Card) {
    this.cards.push(data);
  }
}
