import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DailyTask } from 'src/app/model/DailyTask';
import { CreateTask, DeleteTask, GetAllTask, GetTask} from 'src/app/actions/dailytask.actions';
import { SelectControlValueAccessor } from '@angular/forms';


interface DailyTaskStateModel{
    tasks: DailyTask[]
}

const sampleTasks : DailyTask[] = [{title: 'deneme title', done : true}]
const samples : DailyTask[] = [{title:'deneme 2 title', done:false}]
@State<DailyTaskStateModel>({
    name : 'task',
    defaults: {
        tasks : samples
    }

    
})




export class TaskState{
    @Selector()
    static tasks(state: DailyTaskStateModel) : DailyTask[]{
        return state.tasks;
    }
    @Selector()
    static numUncheckedTodos(state: DailyTaskStateModel): number {
    return state.tasks.filter(task => !task.done).length;
    }

    @Action(CreateTask)
    createTask(ctx : StateContext<DailyTaskStateModel>, action: CreateTask){
        const task = {title: action.payload, done: false};
        ctx.patchState({
            tasks : [task, ...ctx.getState().tasks]
        })
    }

    @Action(DeleteTask)
    deleteTask(ctx: StateContext<DailyTaskStateModel>, action: DeleteTask){
        const { tasks } = ctx.getState();
        ctx.patchState({
         tasks : tasks.filter(task => task !== action.payload)
        });
    }

    @Action(GetAllTask)
    getAllTasks(ctx: StateContext<DailyTaskStateModel>, action: GetTask){
        const { tasks } = ctx.getState();
        const allDone = tasks.every(task => task.done);
        tasks.forEach(task => task.done = ! allDone);
        ctx.patchState({
            tasks: [...tasks]
        })
    }


}