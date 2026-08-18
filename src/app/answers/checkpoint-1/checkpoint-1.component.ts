import { TitleCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-checkpoint-1',
  imports: [TitleCasePipe],
  template: `
    <p>{{ recipe().name }} ({{ recipe().type | titlecase }})</p>
    <p>{{ recipe().description }}</p>

    <button (click)="choose.emit(recipe().id)">Choose</button>
  `,
  styles: ``,
})
export class Checkpoint1Component {
  public readonly recipe = input.required<Recipe>();
  public readonly choose = output<number>();
}

export interface Recipe {
  id: number;
  name: string;
  type: 'salad' | 'soup' | 'drink';
  description: string;
}
