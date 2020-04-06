import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {RouteService} from './route.service';
import {Trace} from './trace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: any = 'AtelierOsrm';
  map: any;
  constructor(private routeService: RouteService) {
  }

  ngOnInit(): void {
    this.map = L.map('map').setView([47.383333, 0.683333], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    // TODO: Afficher un marker aux coordonnées suivantes [47.392923, 0.668914]
  }
  osrm(): void {
    // TODO: Parcourir le GeoJSON que retourne this.routeService.getTrace() en utilisant un subscribe
    // TODO: Afficher la trace avec L.polyline() et n'oubliez pas de l'ajouter à la map !
  }
}
