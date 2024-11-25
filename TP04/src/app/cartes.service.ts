import { Injectable, signal } from '@angular/core';
import { Card } from './models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CartesService {
  private cartesSignal = signal<Card[]>([]);

  getCartes() {
    return this.cartesSignal.asReadonly();
  }

  addCarte(carte: Card) {
    this.cartesSignal.update((cartes) => {
      return [...cartes, carte];
    });
  }

  delCarte(index: number) {
    this.cartesSignal.update((cartes) => {
      return cartes.filter((_, i) => i !== index);
    });
  }
}
