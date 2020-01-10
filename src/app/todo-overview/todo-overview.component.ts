import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../state/app-redux-state';
import { REMOVE_ALL_TODOS } from '../state/actions';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {

  @select() todos;
  @select() lastUpdate;
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: REMOVE_ALL_TODOS });
  }

}
