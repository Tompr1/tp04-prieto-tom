import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartesService } from '../cartes.service';
import { MaskCardPipe } from '../mask-card.pipe';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [CommonModule, MaskCardPipe],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})
export class ListCardComponent {
  constructor(private cartesService: CartesService) {}

  
  get cartes() {
    return this.cartesService.getCartes();
  }

  onRemove(index: number) {
    this.cartesService.delCarte(index);
  }
}
