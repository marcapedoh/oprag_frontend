import { style } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexAnnotations,
  ApexFill,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { Observable } from 'rxjs';
import { getAllChartObject, getAllChartObjectPerDate } from 'src/app/store/actions/chartObject.action';
import { BadgeState, ChartBadgesObjectPerDateState, ChartBadgesObjectState } from 'src/app/store/reducers/badge.reducer';
import { CertificatControlState } from 'src/app/store/reducers/certificatControl.reducer';
import { selectAllBadges, selectAllChartBadges, selectAllChartBadgesPerDate } from 'src/app/store/selector/badge.selector';
import { selectAllCertificatControls } from 'src/app/store/selector/certificatControl.selector';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: any; //ApexXAxis;
  annotations: ApexAnnotations;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
};


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartsComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  badges = []
  certificatControls = []
  chartsObjects = []
  dateDebut: string = ""
  dateFin: string = ""
  inpectionsVehicule$: Observable<ReadonlyArray<any>>;
  badges$: Observable<ReadonlyArray<any>>;
  chartResearchData$: Observable<ReadonlyArray<any>>;
  totalBadges!: number;
  totalRapports!: number;
  totalBadgesActive!: number;
  constructor(private store: Store<CertificatControlState>, private storeBadge: Store<BadgeState>, private storeResearch: Store<ChartBadgesObjectPerDateState>) {
    this.chartOptions = {
      series: [
        {
          name: "Cartes créé",
          data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
        }
      ],
      annotations: {
        points: [
          {
            x: "xaxis",
            seriesIndex: 0,
            label: {
              borderColor: "#775DD0",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "yaxis"
            }
          }
        ]
      },
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          //endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },

      grid: {
        row: {
          colors: ["#1f2937cc", "#1f2937cc"]
        }
      },
      xaxis: {
        labels: {
          rotate: -45,
          style: {
            colors: '#ffffff'
          }
        },
        categories: [
          "Apples",
          "Oranges",
          "Strawberries",
          "Pineapples",
          "Mangoes",
          "Bananas",
          "Blackberries",
          "Pears",
          "Watermelons",
          "Cherries",
          "Pomegranates",
          "Tangerines",
          "Papayas"
        ],
        tickPlacement: "on",

      },
      yaxis: {
        title: {
          text: "Cartes créé",
          style: {
            color: "#fff"
          }
        },
        labels: {
          style: {
            colors: "#fff"
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        }
      }
    };

    this.inpectionsVehicule$ = this.store.pipe(select(selectAllCertificatControls))
    this.badges$ = this.storeBadge.pipe(select(selectAllBadges))
    this.chartResearchData$ = this.storeResearch.pipe(select(selectAllChartBadgesPerDate))

  }

  ngOnInit(): void {
    this.badges$.subscribe((badges: any) => {
      if (Array.isArray(badges.badges) && badges.badges.length > 0) {
        console.log(badges.chartsObjects)
        this.badges = badges.badges
        const counts = badges.chartsObjects.slice(-20).map((item: any) => item.count);
        const dates = badges.chartsObjects.slice(-20).map((item: any) => item.date);

        this.chartOptions = {
          ...this.chartOptions,
          series: [
            {
              name: "Badges Créé",
              data: counts
            }
          ],
          xaxis: {
            ...this.chartOptions.xaxis,
            categories: dates,
            labels: {
              rotate: -45,
              style: {
                colors: '#ffffff'
              }
            }
          }
        };

        this.totalBadgesActive = this.badges.reduce((count: any, badge: any) => badge.active === true ? count + 1 : count, 0)

      } else {
        console.log('No badges found or still loading.');
      }
    });

    this.inpectionsVehicule$.subscribe((certificatControl: any) => {
      if (Array.isArray(certificatControl.certificatControls) && certificatControl.certificatControls.length > 0) {
        this.certificatControls = certificatControl.certificatControls.filter((certificatControl: any) => certificatControl.deleted == false)
      } else {
        console.log('No certificatControl found or still loading.');
      }
    });


  }

  searchDataPerDate() {
    this.storeResearch.dispatch(getAllChartObjectPerDate(this.dateDebut, this.dateFin))

    setTimeout(() => {
      this.chartResearchData$ = this.storeResearch.pipe(select(selectAllChartBadgesPerDate))
    }, 2500)

    this.badges$.subscribe((badges: any) => {
      if (Array.isArray(badges.badges) && badges.badges.length > 0) {
        const counts = badges.chartsObjectsByDates.map((item: any) => item.count);
        const dates = badges.chartsObjectsByDates.map((item: any) => item.date);

        this.chartOptions = {
          ...this.chartOptions,
          series: [
            {
              name: "Badges Créé",
              data: counts
            }
          ],
          xaxis: {
            ...this.chartOptions.xaxis,
            categories: dates,
            labels: {
              rotate: -45,
              style: {
                colors: '#ffffff'
              }
            }
          }
        };

        this.totalBadgesActive = this.badges.reduce((count: any, badge: any) => badge.active === true ? count + 1 : count, 0)

      } else {
        console.log('No badges found or still loading.');
      }
    });
  }

  // Méthode déclenchée par les checkboxes
  onDeviceChange(device: string, checked: boolean) {
    if (checked) {
      switch (device) {
        case 'desktop':
          this.chart.updateSeries([15.1, 22.5, 4.4, 8.4]);
          break;
        case 'tablet':
          this.chart.updateSeries([25.1, 26.5, 1.4, 3.4]);
          break;
        case 'mobile':
          this.chart.updateSeries([45.1, 27.5, 8.4, 2.4]);
          break;
        default:
          this.chart.updateSeries([55.1, 28.5, 1.4, 5.4]);
          break;
      }
    } else {
      this.chart.updateSeries([35.1, 23.5, 2.4, 5.4]);
    }
  }
}
