import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title: string = 'My first AGM project';
  latitude: number = 4.7109886;
  longitude: number = -74.072092;

  onChoseLocation(event) {  
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }
}
