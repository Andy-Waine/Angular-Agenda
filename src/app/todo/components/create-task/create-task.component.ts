import { Component } from "@angular/core";

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
})

export class CreateTaskComponent {
    text: string = '';

    changeText(event: Event): void {
        const target = event.target as HTMLInputElement
        this.text = target.value;
    }

    addTask(): void {
        console.log('addTask', this.text);
    }
}