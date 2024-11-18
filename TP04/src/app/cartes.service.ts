import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartesService {
  private cartesSignal = signal<any[]>([]);

  getCartes() {
    return this.cartesSignal.asReadonly();
  }

  addCarte(carte: any) {
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
