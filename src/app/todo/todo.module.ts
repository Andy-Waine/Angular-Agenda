import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//Devs: Please use absolute pathing only
import { TodoComponent } from 'src/app/todo/components/todo/todo.component';
import { CreateTaskComponent } from 'src/app/todo/components/create-task/create-task.component';

const routes: Routes = [
    {
        path: '',
        component:TodoComponent,
    },
];

@NgModule({
    declarations: [TodoComponent, CreateTaskComponent],
    imports: [RouterModule.forChild(routes)],
})
export class TodoModule {}