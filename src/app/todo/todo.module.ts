import {NgModule} from '@angular/core';
import { TodoComponent } from 'src/app/todo/components/todo/todo.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component:TodoComponent,
    },
];

@NgModule({
    declarations: [TodoComponent],
    imports: [RouterModule.forChild(routes)],
})
export class TodoModule {}