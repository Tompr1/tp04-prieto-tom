import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardComponent } from '../list-card/list-card.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListCardComponent
  ],
  exports: [ListCardComponent]
})
export class ModuleAffModule { }
