import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class DashboardComponent {
  // 📊 Statistiques principales
  stats = [
    { title: 'Total entrant', value: 80572, change: '+20.02%', color: '#16a34a' },
    { title: 'Total sortant', value: 30572, change: '+15.06%', color: '#22c55e' },
    { title: 'Dépense salaires', value: 10572, change: '-12.20%', color: '#dc2626' },
    { title: 'Dépense missions', value: 20572, change: '+20%', color: '#0ea5e9' },
  ];

  // 🟣 Diagramme circulaire (Répartition des dépenses)
  pieChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Salaires', 'Missions', 'Matériel', 'Autres'],
    datasets: [
      {
        data: [45000, 25000, 15000, 5000],
        backgroundColor: ['#22c55e', '#3b82f6', '#f97316', '#e11d48'],
        hoverBackgroundColor: ['#4ade80', '#60a5fa', '#fb923c', '#f43f5e'],
      },
    ],
  };

  pieChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    animation: { animateScale: true, animateRotate: true },
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#fff', font: { size: 13 } },
      },
    },
  };

  pieChartType: ChartConfiguration<'doughnut'>['type'] = 'doughnut';

  // 🟦 Histogramme (évolution mensuelle)
  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Entrées',
        data: [5000, 7000, 6000, 8000, 7500, 9000],
        backgroundColor: '#22c55e',
        borderRadius: 8,
      },
      {
        label: 'Sorties',
        data: [4000, 4500, 4200, 4800, 5000, 5200],
        backgroundColor: '#ef4444',
        borderRadius: 8,
      },
    ],
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    animation: { duration: 1500, easing: 'easeOutCubic' },
    plugins: {
      legend: { labels: { color: '#fff' } },
    },
    scales: {
      x: { ticks: { color: '#fff' }, grid: { color: 'rgba(255,255,255,0.1)' } },
      y: { ticks: { color: '#fff' }, grid: { color: 'rgba(255,255,255,0.1)' } },
    },
  };

  // 🧾 Activités récentes
  recentActivities = [
    { name: 'Paiement client A', date: '29 Oct 2025', amount: '+€8,000', status: 'Reçu', method: 'Virement' },
    { name: 'Salaire Employés', date: '28 Oct 2025', amount: '-€5,000', status: 'Envoyé', method: 'Virement' },
    { name: 'Mission Afrique', date: '26 Oct 2025', amount: '-€2,500', status: 'Envoyé', method: 'Carte' },
  ];
}
