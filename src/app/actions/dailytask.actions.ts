import { DailyTask } from 'src/app/model/DailyTask'


export class CreateTask{
    static readonly type = '[DailyTask] Create Task';
    
    constructor(public payload: string){

    }
}
export class GetTask {
    static readonly type = '[DailyTask] Get Todo';
  
    constructor(public payload: DailyTask) {}
  }

export class DeleteTask{
    static readonly type = '[DailyTask] Delete Task';

    constructor(public payload: DailyTask){

    }
}

export class GetAllTask{
    static readonly type = '[DailyTask] Get All Tasks';
}