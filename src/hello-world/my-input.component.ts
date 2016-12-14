import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-input',
    template: `
        <div>
            <input [(ngModel)]="username">
            <select [(ngModel)]="city" >
                <option value=""></option>
                <option value="Rosario">Rosario</option>
                <option value="Cordoba">Cordoba</option>
                <option value="Buenos Aires">Buenos Aires</option>
            </select>
        </div>
        <div>
        <p> Username: {{ username }} </p>
        <p> City: {{ city }} </p>
        </div>
        <button (click)="myInput.value = 'Hello World'">Click me</button>
        <input #myInput>
        <div *ngFor="let num of numbers" >
        {{ num }}
        </div>
    `,
    directives: [],
    providers: []
})
class MyInputComponent {
    username: string = 'Jss';
    city: string = ''; // No City at first*/
    numbers = [1, 2, 3, 4, 5];
}

export default MyInputComponent;
export { MyInputComponent };
