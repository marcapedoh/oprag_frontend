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
  constructor(private store: Store<CertificatControlState>, private storeBadge: Store<BadgeState>, private activatedRoute: ActivatedRoute) {
    this.inpectionsVehicule$ = this.store.pipe(select(selectAllCertificatControls))
    this.badges$ = this.storeBadge.pipe(select(selectAllBadges))
  }


  ngOnInit(): void {
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
  showToastTest: boolean = false
  save() {
    this.badge = {
      ...this.badge,
      inspecteur: {
        id: +localStorage.getItem("ConnectedUser")!
      }
    }
    this.showToastTest = true;
    this.store.dispatch(createBadge(this.badge))
  }

}
