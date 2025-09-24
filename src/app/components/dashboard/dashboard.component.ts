import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexXAxis,
  ApexFill,
  ApexStroke,
  ApexGrid,
  ApexAnnotations,
  ApexLegend,
  ApexTitleSubtitle,
  ChartComponent,
  ApexResponsive
} from 'ng-apexcharts';
import { debounceTime, distinctUntilChanged, map, Observable, Subject, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { generateCertificatControl, getStat } from 'src/app/store/actions/certificatControl.action';
import { CertificatControlState } from 'src/app/store/reducers/certificatControl.reducer';
import { InspectionState } from 'src/app/store/reducers/inspection.reducer';
import { selectAllCertificatControls } from 'src/app/store/selector/certificatControl.selector';
import { selectAllInspections } from 'src/app/store/selector/inspection.selector';

export type PieChartOptions = {
  series: number[];
  chart: ApexChart;
  labels: string[];
  responsive: ApexResponsive[];
  colors: string[];
  legend?: ApexLegend;
  dataLabels?: ApexDataLabels;
};

export type BarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

export type LineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  title: ApexTitleSubtitle;
};

export type LineChartOptions2 = {
  series: any[];
  chart: any;
  xaxis: any;
  yaxis: any;
  stroke: any;
  markers: any;
  dataLabels: any;
  colors: string[];
  grid: any;
  legend: any;
  tooltip: any;
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
  annotations: ApexAnnotations;
  colors: string[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  inpectionsVehicule$: Observable<ReadonlyArray<any>>;

  @ViewChild("chart") chart!: ChartComponent;
  public statusChart!: Partial<BarChartOptions>;
  public trendChart!: Partial<LineChartOptions>;
  public lineChart!: Partial<LineChartOptions2>;
  public vehicleTypeChart!: Partial<PieChartOptions>;

  paginatedInspections: any[] = [];
  badges = 150;
  certificatControls = 120;
  totalBadgesActive = 135;
  complianceRate = 82;
  subscription!: Subscription;
  inputSubject = new Subject<string>();
  dateDebut: string = '';
  dateFin: string = '';
  selectedSociete: string = '';
  selectedStatut: string = '';
  searchTerm: string = '';

  societes = ['Transports ABC', 'Logistique XYZ', 'Camions 123', 'Fret Ouest', 'Transporteurs Associés'];

  filteredInspections: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  // Données d'exemple pour les inspections

  // Données d'exemple pour l'évolution sur plusieurs mois
  private sampleData = {
    categories: this.getLastWeekDays(), // Les 7 derniers jours
    partners: [
      { name: 'Partner A', data: [15, 12, 18, 20, 16, 14, 22] },
      { name: 'Partner B', data: [8, 10, 12, 9, 11, 15, 13] },
      { name: 'Partner C', data: [22, 25, 20, 18, 24, 26, 28] },
      { name: 'Partner D', data: [5, 7, 6, 8, 9, 10, 12] },
      { name: 'Partner E', data: [30, 28, 32, 35, 30, 33, 36] }
    ]
  };
  trendMultiLine: any[] = [];
  inpections$: Observable<ReadonlyArray<any>>;
  constructor(private store: Store<any>, private dataService: DataService) {
    this.inpectionsVehicule$ = this.store.pipe(select(selectAllCertificatControls))
    // Initialisation des graphiques
    this.initStatusChart();
    this.initTrendChart();
    this.initVehicleTypeChart();
    this.initLineChart();
    this.inpections$ = this.store.pipe(select(selectAllInspections))
  }
  inspections: any[] = [];
  selectedInspection = 0
  ngOnInit(): void {

    // Initialiser les dates par défaut (du 1er au 14 septembre 2025)
    this.dateDebut = '2025-09-01';
    this.dateFin = '2025-09-14';
    this.selectedInspection = +localStorage.getItem("InspectionId")!
    // this.store.dispatch(getStat(this.dateDebut, this.dateFin, +localStorage.getItem("InspectionId")!));
    this.inpections$.subscribe((inspections: any) => {
      console.log(inspections.inspections)
      if (Array.isArray(inspections.inspections) && inspections.inspections.length > 0) {
        this.inspections = inspections.inspections
      } else {
        console.log('No inspections found or still loading.');
      }
    });
    // Appliquer les filtres initiaux
    this.applyFilters();
  }


  onInputChange(event: any) {
    this.inputSubject.next(event.target.value);
  }

  updatePaginatedInspections(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    this.paginatedInspections = this.filteredInspections.slice(start, end);
  }


  initStatusChart(): void {
    this.statusChart = {
      series: [{
        name: 'Conformes',
        data: [45, 52, 38, 45, 49, 43, 40, 52, 38, 45, 49, 43, 40, 45]
      }, {
        name: 'Non conformes',
        data: [12, 8, 15, 10, 7, 9, 12, 8, 15, 10, 7, 9, 12, 8]
      }],
      chart: {
        type: 'bar',
        height: 350,
        stacked: false
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['01/09', '02/09', '03/09', '04/09', '05/09', '06/09', '07/09', '08/09', '09/09', '10/09', '11/09', '12/09', '13/09', '14/09'],
        title: {
          text: 'Date'
        }
      },
      yaxis: {
        title: {
          text: "Nombre d'inspections"
        }
      },
      fill: {
        opacity: 1
      },
      colors: ['#4CAF50', '#F44336'],
      legend: {
        position: 'top',
        horizontalAlign: 'right',
      }
    };
  }

  initTrendChart(): void {
    this.trendChart = {
      series: [{
        name: "Inspections",
        data: [57, 60, 53, 55, 56, 52, 60, 60, 53, 56, 56, 55, 52, 53]
      }],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Tendances des inspections par jour',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['01/09', '02/09', '03/09', '04/09', '05/09', '06/09', '07/09', '08/09', '09/09', '10/09', '11/09', '12/09', '13/09', '14/09'],
        title: {
          text: 'Date'
        }
      },
      yaxis: {
        title: {
          text: "Nombre d'inspections"
        }
      }
    };
  }

  initVehicleTypeChart(): void {
    this.vehicleTypeChart = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 480,
        type: 'pie',
      },
      labels: ['Camions frigorifiques', 'Porte-conteneurs', 'Camions-citernes', 'Plateaux', 'Autres'],
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
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
    };
  }

  getReportsTrendData(): { series: any[], categories: string[] } {
    // Ici, vous devrez adapter pour récupérer les données réelles de votre base
    // Voici un exemple avec des données statiques pour la semaine dernière

    return {
      series: this.sampleData.partners,
      categories: this.sampleData.categories
    };
  }

  initLineChart(): void {
    // Récupérer les données réelles de votre base
    const chartData = this.transformTrendData(this.trendMultiLine);

    this.lineChart = {
      series: chartData.series,
      chart: {
        type: 'line',
        height: 350,
        zoom: {
          enabled: true,
          type: 'x',
          autoScaleYaxis: true
        },
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true
          }
        }
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      markers: {
        size: 5,
        hover: {
          size: 7
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: chartData.categories,
        title: {
          text: 'Date'
        },
        labels: {
          rotate: -45
        }
      },
      yaxis: {
        title: {
          text: 'Nombre de rapports'
        },
        min: 0,
        labels: {
          formatter: (value: number) => {
            return `${Math.round(value)}`; // Pas de pourcentage, juste le nombre
          }
        }
      },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#00D9E9', '#FF66C3'],
      grid: {
        borderColor: '#f1f1f1',
        row: {
          colors: ['transparent', '#f8f8f8'],
          opacity: 0.5
        }
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        offsetY: 0
      },
      tooltip: {
        y: {
          formatter: (value: number) => {
            return `${value} rapports`;
          }
        }
      }
    };
  }
  private transformTrendData(trendData: any[]): any {
    // Si vous avez plusieurs inspectionId (multi-lignes)
    const uniqueInspectionIds = [...new Set(trendData.map(item => item.inspectionId))];

    // Grouper les données par inspectionId
    const seriesData = uniqueInspectionIds.map(inspectionId => {
      const filteredData = trendData.filter(item => item.inspectionId === inspectionId);

      return {
        name: `Inspection ${inspectionId}`,
        data: this.prepareDataForSeries(filteredData, this.getDateRange(trendData))
      };
    });

    // Si vous voulez une seule ligne avec le total
    const singleSeriesData = [{
      name: 'Total des inspections',
      data: this.prepareSingleSeriesData(trendData)
    }];

    // Dates pour l'axe X
    const categories = this.getDateRange(trendData).map(date =>
      this.formatDateForChart(date)
    );

    return {
      series: singleSeriesData, // ou seriesData pour multi-lignes
      categories: categories
    };
  }

  /**
   * Prépare les données pour une série unique (total)
   */
  private prepareSingleSeriesData(trendData: any[]): number[] {
    const dateRange = this.getDateRange(trendData);

    return dateRange.map(date => {
      const dataForDate = trendData.find(item => item.date === date);
      return dataForDate ? dataForDate.count : 0;
    });
  }

  /**
   * Prépare les données pour plusieurs séries
   */
  private prepareDataForSeries(filteredData: any[], dateRange: string[]): number[] {
    return dateRange.map(date => {
      const dataForDate = filteredData.find(item => item.date === date);
      return dataForDate ? dataForDate.count : 0;
    });
  }

  /**
   * Extrait la plage de dates complète
   */
  private getDateRange(trendData: any[]): string[] {
    if (!trendData || trendData.length === 0) return [];

    // Trier les dates
    const dates = trendData.map(item => item.date).sort();
    const startDate = dates[0];
    const endDate = dates[dates.length - 1];

    // Générer toutes les dates entre startDate et endDate
    return this.generateDateRange(startDate, endDate);
  }

  /**
   * Génère toutes les dates entre deux dates
   */
  private generateDateRange(start: string, end: string): string[] {
    const dates: string[] = [];
    const currentDate = new Date(start);
    const endDate = new Date(end);

    while (currentDate <= endDate) {
      dates.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  }

  /**
   * Formate la date pour l'affichage dans le chart
   */
  private formatDateForChart(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit'
    });
  }

  /**
   * Méthode pour mettre à jour le chart avec de nouvelles données
   */
  updateChartWithData(newData: any[]): void {
    this.trendMultiLine = newData;
    this.initLineChart();
  }

  // Données d'exemple pour la semaine dernière


  // Méthode pour générer les jours de la semaine dernière
  getLastWeekDays(): string[] {
    const days = [];
    const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

    // Aujourd'hui
    const today = new Date();

    // Générer les 7 derniers jours (du plus ancien au plus récent)
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dayName = dayNames[date.getDay()];
      const dayNumber = date.getDate();
      const month = date.getMonth() + 1;
      days.push(`${dayName} ${dayNumber}/${month}`);
    }

    return days;
  }



  // Mettre à jour les données du graphique
  updateChartData(series: any[], categories: string[]): void {
    if (this.lineChart) {
      this.lineChart.series = series;
      this.lineChart.xaxis = {
        ...this.lineChart.xaxis,
        categories: categories
      };
    }
  }

  searchDataPerDate(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.dataService.getState(this.dateDebut, this.dateFin, this.selectedInspection).subscribe((stat) => {
      console.log(stat)
      this.totalBadgesActive = stat.totalCardActive
      this.badges = stat.totalCard
      this.certificatControls = stat.totalRapport
      this.complianceRate = stat.ConformeRate
      this.trendChart = {
        ...this.trendChart,
        series: [
          {
            name: "Inspections",
            data: stat.trend.inspections
          }
        ],
        xaxis: {
          ...this.trendChart.xaxis,
          categories: stat.trend.categories,
        }
      }
      this.vehicleTypeChart = {
        ...this.vehicleTypeChart,
        series: stat.vehicleTypes.series,
        labels: [...stat.vehicleTypes.labels]
      }
      this.statusChart = {
        ...this.statusChart,
        series: [
          {
            name: "Conformes",
            data: stat.status.conformes
          },
          {
            name: "Non conformes",
            data: stat.status.nonConformes
          }
        ],
        xaxis: {
          ...this.statusChart.xaxis,
          categories: stat.status.categories
        }
      }
      this.lineChart = {
        ...this.lineChart,
        series: stat.partners,
        xaxis: {
          ...this.lineChart.xaxis,
          categories: stat.categories
        }
      }
      this.updateChartWithData(stat.trendMultiLine)
      this.filteredInspections = stat.filteredData
      this.totalItems = this.filteredInspections.length
      this.updatePaginatedInspections();
    })
    this.subscription = this.inputSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(searchText => {
        if (!searchText.trim()) return this.paginatedInspections.slice(0, this.itemsPerPage);

        const lowerSearch = searchText.toString().toLowerCase();
        this.paginatedInspections = this.filteredInspections.filter((item: any) =>
          item.societe.toLowerCase().includes(lowerSearch) ||
          item.creationDate.toString().includes(lowerSearch) ||
          item.validite.toString().includes(lowerSearch) ||
          item.avisFavorable?.toString().includes(lowerSearch)

        );

        return this.paginatedInspections
      })
    ).subscribe(filtered => {
      this.paginatedInspections = filtered;
    });

  }

  updateChartsWithFilteredData(filteredData: any[]): void {
    // Ici, vous devriez normalement regrouper et agréger les données filtrées
    // Pour cet exemple, nous allons simplement mettre à jour avec des données aléatoires

    const daysCount = 14; // Du 1er au 14 septembre
    const newConformes = Array(daysCount).fill(0).map(() => Math.floor(Math.random() * 20) + 30);
    const newNonConformes = Array(daysCount).fill(0).map(() => Math.floor(Math.random() * 10) + 5);
    const newTrend = Array(daysCount).fill(0).map(() => Math.floor(Math.random() * 15) + 45);

    this.statusChart.series = [
      { name: 'Conformes', data: newConformes },
      { name: 'Non conformes', data: newNonConformes }
    ];

    this.trendChart.series = [
      { name: 'Inspections', data: newTrend }
    ];

    // Forcer la mise à jour des graphiques
    this.statusChart = { ...this.statusChart };
    this.trendChart = { ...this.trendChart };
  }

  generateReportAction(certificatControlId: number) {
    this.store.dispatch(generateCertificatControl(certificatControlId))
  }

  downloadInspection(inspectionId: string): void {
    // Simuler le téléchargement d'une fiche d'inspection
    console.log(`Téléchargement de la fiche d'inspection: ${inspectionId}`);
    // Ici, vous implémenteriez la logique réelle de téléchargement
    alert(`Téléchargement de la fiche ${inspectionId}`);
  }

  exportToExcel(): void {
    // 1. Convertir les données en worksheet
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.paginatedInspections);

    // 2. Créer un workbook et ajouter le worksheet
    const workbook: XLSX.WorkBook = {
      Sheets: { 'Données': worksheet },
      SheetNames: ['Données'],
    };

    // 3. Générer un buffer Excel
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // 4. Sauvegarder le fichier
    const blob: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, `export_${new Date().toISOString().slice(0, 10)}.xlsx`);
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get visiblePages(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(this.totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedInspections();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedInspections();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedInspections();
    }
  }
}
