import { Component } from "@angular/core";

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
})

export class CreateTaskComponent {
    changeText(event: Event) {
        const target = event.target as HTMLInputElement
        console.log(target.value);
    }
}