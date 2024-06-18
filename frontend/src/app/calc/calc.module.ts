import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalcRoutingModule } from './calc-routing.module';
import { CalcComponent } from './calc.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [CalcComponent, GraphComponent],
  imports: [CommonModule, FormsModule, CalcRoutingModule],
})
export class CalcModule {}
