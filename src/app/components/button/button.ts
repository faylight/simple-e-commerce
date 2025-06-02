import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      class=" text-black px-5 py-2 rounded-xl shadow-md hover:opacity-bg-slate"
      (click)="btnClicked.emit()"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class Button {
  label = input('');

  btnClicked = output();
}
