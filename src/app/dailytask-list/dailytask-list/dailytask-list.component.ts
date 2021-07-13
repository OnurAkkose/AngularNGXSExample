import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { DailyTask } from 'src/app/model/DailyTask';
import { TaskState } from 'src/app/state/dailytask.state';
import { DeleteTask, GetTask } from 'src/app/actions/dailytask.actions';
@Component({
  selector: 'app-dailytask-list',
  templateUrl: './dailytask-list.component.html',
  styleUrls: ['./dailytask-list.component.css']
})
export class DailytaskListComponent implements OnInit {

  @Select(TaskState.numUncheckedTodos)
  uncheckedTodos!: Observable<number>;

  @Select(TaskState.tasks)
  tasks!: Observable<DailyTask[]>;

  constructor(private store: Store) { }

  getTask(task: DailyTask) {
    this.store.dispatch(new GetTask(task));
  }

  deleteTask(task: DailyTask) {
    
    this.store.dispatch(new DeleteTask(task));
  }

  ngOnInit(): void {
  }

}
