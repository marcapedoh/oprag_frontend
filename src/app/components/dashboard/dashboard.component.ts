import { Component, OnInit, ViewChild } from '@angular/core';

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
  @ViewChild("chart") chart!: ChartComponent;
  public statusChart!: Partial<BarChartOptions>;
  public trendChart!: Partial<LineChartOptions>;
  public lineChart!: Partial<LineChartOptions2>;
  public vehicleTypeChart!: Partial<PieChartOptions>;

  // Données simulées
  badges = Array(150).fill(0);
  certificatControls = Array(120).fill(0);
  totalBadgesActive = 135;
  complianceRate = 82;

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
  inspections = [
    { id: 'INSP-001', inspectionDate: new Date(2025, 8, 1), company: 'Transports ABC', vehicleType: 'Camion frigorifique', status: 'conforme' },
    { id: 'INSP-002', inspectionDate: new Date(2025, 8, 1), company: 'Logistique XYZ', vehicleType: 'Porte-conteneurs', status: 'non_conforme' },
    { id: 'INSP-003', inspectionDate: new Date(2025, 8, 2), company: 'Camions 123', vehicleType: 'Camion-citerne', status: 'conforme' },
    { id: 'INSP-004', inspectionDate: new Date(2025, 8, 2), company: 'Fret Ouest', vehicleType: 'Plateau', status: 'conforme' },
    { id: 'INSP-005', inspectionDate: new Date(2025, 8, 3), company: 'Transporteurs Associés', vehicleType: 'Camion frigorifique', status: 'non_conforme' },
    { id: 'INSP-006', inspectionDate: new Date(2025, 8, 3), company: 'Transports ABC', vehicleType: 'Porte-conteneurs', status: 'conforme' },
    { id: 'INSP-007', inspectionDate: new Date(2025, 8, 4), company: 'Logistique XYZ', vehicleType: 'Camion-citerne', status: 'conforme' },
    { id: 'INSP-008', inspectionDate: new Date(2025, 8, 4), company: 'Camions 123', vehicleType: 'Plateau', status: 'non_conforme' },
    { id: 'INSP-009', inspectionDate: new Date(2025, 8, 5), company: 'Fret Ouest', vehicleType: 'Camion frigorifique', status: 'conforme' },
    { id: 'INSP-010', inspectionDate: new Date(2025, 8, 5), company: 'Transporteurs Associés', vehicleType: 'Porte-conteneurs', status: 'conforme' },
    { id: 'INSP-011', inspectionDate: new Date(2025, 8, 8), company: 'Transports ABC', vehicleType: 'Camion-citerne', status: 'non_conforme' },
    { id: 'INSP-012', inspectionDate: new Date(2025, 8, 8), company: 'Logistique XYZ', vehicleType: 'Plateau', status: 'conforme' },
    { id: 'INSP-013', inspectionDate: new Date(2025, 8, 9), company: 'Camions 123', vehicleType: 'Camion frigorifique', status: 'conforme' },
    { id: 'INSP-014', inspectionDate: new Date(2025, 8, 9), company: 'Fret Ouest', vehicleType: 'Porte-conteneurs', status: 'non_conforme' },
    { id: 'INSP-015', inspectionDate: new Date(2025, 8, 10), company: 'Transporteurs Associés', vehicleType: 'Camion-citerne', status: 'conforme' },
    { id: 'INSP-016', inspectionDate: new Date(2025, 8, 10), company: 'Transports ABC', vehicleType: 'Plateau', status: 'conforme' },
    { id: 'INSP-017', inspectionDate: new Date(2025, 8, 11), company: 'Logistique XYZ', vehicleType: 'Camion frigorifique', status: 'non_conforme' },
    { id: 'INSP-018', inspectionDate: new Date(2025, 8, 11), company: 'Camions 123', vehicleType: 'Porte-conteneurs', status: 'conforme' },
    { id: 'INSP-019', inspectionDate: new Date(2025, 8, 12), company: 'Fret Ouest', vehicleType: 'Camion-citerne', status: 'conforme' },
    { id: 'INSP-020', inspectionDate: new Date(2025, 8, 12), company: 'Transporteurs Associés', vehicleType: 'Plateau', status: 'non_conforme' }
  ];

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

  constructor() {
    // Initialisation des graphiques
    this.initStatusChart();
    this.initTrendChart();
    this.initVehicleTypeChart();
    this.initLineChart();
  }

  ngOnInit(): void {
    // Initialiser les dates par défaut (du 1er au 14 septembre 2025)
    this.dateDebut = '2025-09-01';
    this.dateFin = '2025-09-14';

    // Appliquer les filtres initiaux
    this.applyFilters();
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
        width: 380,
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
    const chartData = this.getReportsTrendData();

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
    let filtered = [...this.inspections];

    // Filtrer par date
    if (this.dateDebut && this.dateFin) {
      const startDate = new Date(this.dateDebut);
      const endDate = new Date(this.dateFin);
      endDate.setHours(23, 59, 59); // Inclure toute la journée de fin

      filtered = filtered.filter(inspection => {
        const inspectionDate = new Date(inspection.inspectionDate);
        return inspectionDate >= startDate && inspectionDate <= endDate;
      });
    }

    // Filtrer par société
    if (this.selectedSociete) {
      filtered = filtered.filter(inspection => inspection.company === this.selectedSociete);
    }

    // Filtrer par statut
    if (this.selectedStatut) {
      filtered = filtered.filter(inspection => inspection.status === this.selectedStatut);
    }

    // Filtrer par terme de recherche
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(inspection =>
        inspection.id.toLowerCase().includes(term) ||
        inspection.company.toLowerCase().includes(term) ||
        inspection.vehicleType.toLowerCase().includes(term)
      );
    }

    this.filteredInspections = filtered;
    this.totalItems = filtered.length;
    this.currentPage = 1;

    // Mettre à jour les graphiques avec les données filtrées
    this.updateChartsWithFilteredData(filtered);
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

  downloadInspection(inspectionId: string): void {
    // Simuler le téléchargement d'une fiche d'inspection
    console.log(`Téléchargement de la fiche d'inspection: ${inspectionId}`);
    // Ici, vous implémenteriez la logique réelle de téléchargement
    alert(`Téléchargement de la fiche ${inspectionId}`);
  }

  exportToExcel(): void {
    // Simuler l'exportation Excel
    console.log('Exportation des données en Excel');
    // Ici, vous implémenteriez la logique réelle d'exportation Excel
    alert('Exportation Excel effectuée');
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
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
