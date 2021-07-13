import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { CreateTask } from 'src/app/actions/dailytask.actions';

@Component({
  selector: 'app-dailytask-form',
  templateUrl: './dailytask-form.component.html',
  styleUrls: ['./dailytask-form.component.css']
})
export class DailytaskFormComponent implements OnInit {
  
  dailyTaskForm : FormGroup;

  constructor(private fb: FormBuilder,
              private store: Store ) {
                this.dailyTaskForm = fb.group({
                  'titlePl' : ''
                });

               }

  ngOnInit(): void {
  }

  submitTask(){
    const { titlePl } = this.dailyTaskForm.value;
    this.store.dispatch(new CreateTask(titlePl));
  }

}
