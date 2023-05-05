import { Component } from '@angular/core';

@Component( {
    selector: 'app-counter',
    template: `<p><strong>Counter:</strong> {{ counter }}</p>

    <button class="btn btn-secondary mx-2" (click)="increaseBy(1)">
        +1
    </button>
    <button class="btn btn-secondary mx-2" (click)="reset()">
        Reset
    </button>
    <button class="btn btn-secondary mx-2" (click)="increaseBy(-1)">
        -1
    </button>
    `,
} )

export class CounterComponent {
    constructor() {
    }

    public counter: number = 10;

    increaseBy( value: number ): void {
        this.counter += value;
    }

    reset(): void {
        this.counter = 10;
    }
}
