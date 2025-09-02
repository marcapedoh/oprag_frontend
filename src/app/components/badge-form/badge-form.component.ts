import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createBadge } from 'src/app/store/actions/badge.action';
import { BadgeState } from 'src/app/store/reducers/badge.reducer';
import { CertificatControlState } from 'src/app/store/reducers/certificatControl.reducer';
import { selectAllBadges } from 'src/app/store/selector/badge.selector';
import { selectAllCertificatControls } from 'src/app/store/selector/certificatControl.selector';

@Component({
  selector: 'app-badge-form',
  templateUrl: './badge-form.component.html',
  styleUrls: ['./badge-form.component.css']
})
export class BadgeFormComponent {
  badge: any = {
    certificatControl: {
      id: 0
    }
  }
  badges$: Observable<ReadonlyArray<any>>;
  inpectionsVehicule$: Observable<ReadonlyArray<any>>;
  certificatControls: any[] = []

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
    { value: 'VINGT_MOIS', label: '20 MOIS' },
    { value: 'VINGT_UN_MOIS', label: '21 MOIS' },
    { value: 'VINGT_DEUX_MOIS', label: '22 MOIS' },
    { value: 'VINGT_TROIS_MOIS', label: '23 MOIS' },
    { value: 'VINGT_QUATRE_MOIS', label: '24 MOIS' },
  ];
  constructor(private store: Store<CertificatControlState>, private storeBadge: Store<BadgeState>, private activatedRoute: ActivatedRoute) {
    this.inpectionsVehicule$ = this.store.pipe(select(selectAllCertificatControls))
    this.badges$ = this.storeBadge.pipe(select(selectAllBadges))
  }


  saveForm() {
    localStorage.setItem('badge', JSON.stringify(this.badge));
  }

  ngOnInit(): void {
    const savedData = localStorage.getItem('badge');
    if (savedData) {
      this.badge = JSON.parse(savedData);
    }

    this.inpectionsVehicule$.subscribe((certificatControl: any) => {
      console.log(certificatControl.certificatControls)
      if (Array.isArray(certificatControl.certificatControls) && certificatControl.certificatControls.length > 0) {
        this.certificatControls = certificatControl.certificatControls
      } else {
        console.log('No certificatControl found or still loading.');
      }
    });

    this.badges$.subscribe((badges: any) => {
      console.log(badges.badges)
      if (Array.isArray(badges.badges) && badges.badges.length > 0) {
        this.activatedRoute.paramMap.subscribe((param) => {
          const badgeId = Number(param.get('id'));

          if (badgeId) {
            this.badge = badges.badges.find((badge: any) => badge.id === badgeId)
            console.log(this.badge)
          }

        })
      } else {
        console.log('No badges found or still loading.');
      }
    });
  }
  save() {
    this.badge = {
      ...this.badge,
      inspecteur: {
        id: +localStorage.getItem("ConnectedUser")!
      }
    }
    this.store.dispatch(createBadge(this.badge))
    localStorage.removeItem("badge")
  }

}
