import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { combineLatest, filter, map, Observable, tap } from 'rxjs';
import { getAllBadge } from 'src/app/store/actions/badge.action';
import { selectAllBadges, selectOneBadgeById } from 'src/app/store/selector/badge.selector';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  badges$: Observable<ReadonlyArray<any>>;
  badges: any = []
  imageUrl: string = ""
  @ViewChild('recto') rectoRef!: ElementRef;
  @ViewChild('verso') versoRef!: ElementRef;
  constructor(private activatedRoute: ActivatedRoute, private store: Store<any>) {
    this.badges$ = this.store.pipe(select(selectAllBadges))
  }
  badge: any = {}

  ngOnInit(): void {
    this.badges$.subscribe((badges: any) => {
      console.log(badges)
      if (Array.isArray(badges.badges) && badges.badges.length > 0) {

        this.activatedRoute.paramMap.subscribe((param) => {
          const badgeId = Number(param.get('id'));

          if (badgeId) {
            this.badge = badges.badges.find((badge: any) => badge.id === badgeId)
          }

        })
      }
    });

  }

  onFileSelected(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.imageUrl = URL.createObjectURL(file);
    }
  }

  printCard(): void {
    const recto = this.rectoRef.nativeElement as HTMLElement;
    const verso = this.versoRef.nativeElement as HTMLElement;

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [85.6, 53.98]
    });

    html2canvas(recto, { scale: 2 }).then(canvas1 => {
      const imgData1 = canvas1.toDataURL('image/png');
      pdf.addImage(imgData1, 'PNG', 0, 0, 85.6, 53.98);

      // Nouvelle page pour verso
      pdf.addPage([85.6, 53.98], 'landscape');
      html2canvas(verso, { scale: 2 }).then(canvas2 => {
        const imgData2 = canvas2.toDataURL('image/png');
        pdf.addImage(imgData2, 'PNG', 0, 0, 85.6, 53.98);
        pdf.save(`badge-${this.badge?.numero || 'carte'}.pdf`);
      });
    });
  }




}
