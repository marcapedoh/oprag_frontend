import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // Dans votre composant
  user = {
    firstName: '', // Remplacez par le prénom réel
    lastName: '',   // Remplacez par le nom réel
    profileColor: this.getRandomColor()
  };

  ngOnInit(): void {
    this.user = {
      ...this.user,
      lastName: localStorage.getItem("Nom")!,
      firstName: localStorage.getItem("Prenom")!
    }
  }

  // Méthode pour générer une couleur aléatoire
  getRandomColor() {
    const colors = [
      '#3B82F6', // blue-500
      '#EF4444', // red-500
      '#10B981', // emerald-500
      '#F59E0B', // amber-500
      '#8B5CF6', // violet-500
      '#EC4899', // pink-500
      '#14B8A6', // teal-500
      '#F97316'  // orange-500
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
