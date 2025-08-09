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
  moisOptions = [
    { value: 'UN_MOIS', label: '1 MOIS' },
    { value: 'DEUX_MOIS', label: '2 MOIS' },
    { value: 'TROIS_MOIS', label: '3 MOIS' },
    { value: 'QUATRE_MOIS', label: '4 MOIS' },
    { value: 'CINQ_MOIS', label: '5 MOIS' },
    { value: 'SIX_MOIS', label: '6 MOIS' },
    { value: 'SEPT_MOIS', label: '7 MOIS' },
    { value: 'HUIT_MOIS', label: '8 MOIS' },
    { value: 'NEUF_MOIS', label: '9 MOIS' },
    { value: 'DIX_MOIS', label: '10 MOIS' },
    { value: 'ONZE_MOIS', label: '11 MOIS' },
    { value: 'DOUZE_MOIS', label: '12 MOIS' },
    { value: 'TREIZE_MOIS', label: '13 MOIS' },
    { value: 'QUATORZE_MOIS', label: '14 MOIS' },
    { value: 'QUINZE_MOIS', label: '15 MOIS' },
    { value: 'SEIZE_MOIS', label: '16 MOIS' },
    { value: 'DIX_SEPT_MOIS', label: '17 MOIS' },
    { value: 'DIX_HUIT_MOIS', label: '18 MOIS' },
    { value: 'DIX_NEUF_MOIS', label: '19 MOIS' },
    { value: 'VINGT_MOIS', label: '20 MOIS' }
  ];
  badges = []
  ngOnInit(): void {
    this.badges$.subscribe((badges: any) => {
      console.log(badges.badges)
      if (Array.isArray(badges.badges) && badges.badges.length > 0) {
        this.badges = badges.badges.map((badge: any) => {
          const option = this.moisOptions.find(opt => opt.value === badge.validite);
          return {
            ...badge,
            validite: option ? option.label : badge.validite
          };
        });
      } else {
        console.log('No badges found or still loading.');
      }
    });
  }
}
