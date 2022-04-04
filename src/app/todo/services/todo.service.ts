import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class TodoService {
    todo$ = new BehaviorSubject<TodoInterface[]>([]);
}