import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailytaskFormComponent } from './dailytask-form/dailytask-form/dailytask-form.component';
import { DailytaskListComponent } from './dailytask-list/dailytask-list/dailytask-list.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { TaskState } from 'src/app/state/dailytask.state';
@NgModule({
  declarations: [
    AppComponent,
    DailytaskFormComponent,
    DailytaskListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([TaskState]) ,
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
