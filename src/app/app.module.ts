import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { FormsModule } from '@angular/forms';

import { AppBootstrapModule } from './bootstrap-module/app-bootstrap.module';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { IAppState, rootReducer, INITIAL_STATE } from './state/app-redux-state';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoOverviewComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule
    // AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }

}
