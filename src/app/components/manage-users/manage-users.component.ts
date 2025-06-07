import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAllUserPerInspectionName } from 'src/app/store/actions/user-per-inspection.action';
import { selectAllUserPerInspection } from 'src/app/store/selector/user-per-inspection.selector';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  usersPerInspection$: Observable<ReadonlyArray<any>>;

  constructor(private store: Store<any>) {
    this.usersPerInspection$ = this.store.pipe(select(selectAllUserPerInspection))
  }

  ngOnInit(): void {
    this.store.dispatch(getAllUserPerInspectionName(localStorage.getItem("InspectionName")!))

    this.usersPerInspection$.subscribe((usersPerInspection: any) => {

      console.log(usersPerInspection)
      if (Array.isArray(usersPerInspection.usersPerInspection) && usersPerInspection.usersPerInspection.length > 0) {

      } else {
        console.log('No userPerInspection found or still loading.');
      }
    })
  }
}
