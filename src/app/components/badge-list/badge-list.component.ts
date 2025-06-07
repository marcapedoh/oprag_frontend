import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BadgeState } from 'src/app/store/reducers/badge.reducer';
import { selectAllBadges } from 'src/app/store/selector/badge.selector';

@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.css']
})
export class BadgeListComponent implements OnInit {
  badges$: Observable<ReadonlyArray<any>>;

  constructor(private store: Store<BadgeState>) {
    this.badges$ = this.store.pipe(select(selectAllBadges))
  }
  columns: any = {
    columnsName: ["id", "numero", "validite", "numeroParc", "inspecteur.nom"],
    field: ["#", "numero", "validite", "Numero Parc", "NomInspecteur"]
  }
  badges = []
  ngOnInit(): void {
    this.badges$.subscribe((badges: any) => {
      console.log(badges.badges)
      if (Array.isArray(badges.badges) && badges.badges.length > 0) {
        this.badges = badges.badges
      } else {
        console.log('No badges found or still loading.');
      }
    });
  }
}
