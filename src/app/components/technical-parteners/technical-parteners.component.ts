import { AfterViewInit, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createInspection } from 'src/app/store/actions/inspection.action';
import { InspectionState } from 'src/app/store/reducers/inspection.reducer';
import { selectAllInspections } from 'src/app/store/selector/inspection.selector';

interface Inspection {
  code: string;
  nom: string;
  type: string;
  logo: any | null;
}

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexPlotOptions,
  ApexDataLabels,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  colors: string[];
  tooltip: ApexTooltip;
};


@Component({
  selector: 'app-technical-parteners',
  templateUrl: './technical-parteners.component.html',
  styleUrls: ['./technical-parteners.component.css']
})
export class TechnicalPartenersComponent implements OnInit {
  inpections$: Observable<ReadonlyArray<any>>;
  inspectionStatusChart: any;
  isDarkMode = false;

  constructor(private store: Store<InspectionState>) {
    this.inpections$ = this.store.pipe(select(selectAllInspections))

  }
  isStatsCardCollapsed = false;

  toggleStatsCard() {
    this.isStatsCardCollapsed = !this.isStatsCardCollapsed;
  }
  // Exemple TypeScript (dans ton composant)
  usersByPartyChart: ChartOptions = {
    series: [{
      name: 'Utilisateurs',
      data: [25, 40, 15, 20] // Tes vraies données ici
    }],
    chart: {
      type: "bar",  // Ici, c'est typé strictement, donc "bar" entre guillemets
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: ['Parti A', 'Parti B', 'Parti C', 'Parti D']
    },
    colors: ['#1E3A8A', '#9333EA', '#10B981', '#F59E0B'],
    tooltip: {
      y: {
        formatter: function (val: number) {
          return `${val} utilisateurs`;
        }
      }
    }
  };


  inspections: any = []
  ngOnInit(): void {
    this.initializeChart();
    this.inpections$.subscribe((inspections: any) => {
      console.log(inspections.inspections)
      if (Array.isArray(inspections.inspections) && inspections.inspections.length > 0) {
        this.inspections = inspections.inspections
      } else {
        console.log('No inspections found or still loading.');
      }
    });

  }
  initializeChart(): void {
    this.inspectionStatusChart = {
      series: [65, 35], // 65% Active, 35% Désactivée
      chart: {
        type: 'pie',
        height: 300,
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350
          }
        },
        foreColor: this.isDarkMode ? '#FFFFFF' : '#000000'
      },
      labels: ['Active', 'Désactivée'],
      colors: ['#10B981', '#EF4444'], // Vert pour Active, Rouge pour Désactivée
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      dataLabels: {
        enabled: true,
      },
      tooltip: {
        theme: this.isDarkMode ? 'dark' : 'light'
      }
    };
  }


  // Ajoutez cette configuration pour le nouveau line chart
  inspectionTrendChart: any = {
    series: [
      {
        name: "Inspections Planifiées",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      },
      {
        name: "Inspections Réalisées",
        data: [25, 32, 28, 45, 42, 55, 60, 85, 110]
      }
    ],
    chart: {
      type: 'line',
      height: 350,
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800
      },
      foreColor: this.isDarkMode ? '#FFFFFF' : '#000000',
      toolbar: {
        show: false
      }
    },
    colors: ['#3B82F6', '#10B981'], // Bleu pour planifiées, Vert pour réalisées
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      labels: {
        style: {
          colors: this.isDarkMode ? '#FFFFFF' : '#000000'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: this.isDarkMode ? '#FFFFFF' : '#000000'
        }
      }
    },
    grid: {
      borderColor: this.isDarkMode ? '#374151' : '#E5E7EB'
    },
    tooltip: {
      theme: this.isDarkMode ? 'dark' : 'light',
      shared: true,
      intersect: false
    },
    legend: {
      position: 'top',
      labels: {
        colors: this.isDarkMode ? '#FFFFFF' : '#000000'
      }
    }
  };

  // N'oubliez pas de mettre à jour les couleurs dans la méthode updateChartColors()

  // Dans votre composant.ts
  showDetailsModal = false;
  showConfirmationModal = false;
  selectedPartner: any = null;

  // Méthode pour ouvrir le modal de détails
  openDetailsModal(partner: any) {
    this.selectedPartner = partner;
    console.log(this.selectedPartner)
    this.showDetailsModal = true;
  }

  // Méthode pour ouvrir le modal de confirmation
  openConfirmationModal() {
    this.showDetailsModal = false;
    this.showConfirmationModal = true;
  }

  // Méthode pour basculer le statut
  togglePartnerStatus() {
    if (this.selectedPartner) {
      // Ici vous devriez appeler votre service pour mettre à jour le statut
      this.selectedPartner.status = !this.selectedPartner.status;
      this.store.dispatch(createInspection(this.selectedPartner))
    }

    this.showConfirmationModal = false;
    this.selectedPartner = null;
  }
  showNewInspectionModal = false;
  selectedFile: File | null = null;
  filePreview: string | ArrayBuffer | null = null;

  newInspection: Inspection = {
    code: '',
    nom: '',
    type: 'TRACTEUR',
    logo: null
  };

  inspectionTypes = [
    { value: 'TRACTEUR', label: 'Tracteur' },
    { value: 'REMORQUE', label: 'Remorque' },
    { value: 'ENGIN', label: 'Engin' }
  ];

  openNewInspectionModal(): void {
    this.showNewInspectionModal = true;
  }

  closeNewInspectionModal(): void {
    this.showNewInspectionModal = false;
    this.resetForm();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        this.filePreview = e.target?.result as string;
        this.newInspection.logo = this.filePreview; // Stocke le base64
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  isFormValid(): boolean {
    return !!this.newInspection.code &&
      !!this.newInspection.nom &&
      !!this.newInspection.type;
  }


  submitInspection(): void {
    if (!this.isFormValid()) return;
    console.log(this.newInspection)
    this.store.dispatch(createInspection(this.newInspection))
    this.resetForm();
    this.closeNewInspectionModal();
  }

  private resetForm(): void {
    this.newInspection = {
      code: '',
      nom: '',
      type: 'TRACTEUR',
      logo: null
    };
    this.selectedFile = null;
    this.filePreview = null;
  }
}
