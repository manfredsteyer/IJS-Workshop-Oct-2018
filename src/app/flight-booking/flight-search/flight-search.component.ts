import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { FlightService } from './flight.service';
import { Flight } from '../../entities/flight';

// import { LoggerLibModule } from '@my/logger-lib';
// LoggerLibModule

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  flights: Array<Flight> = [];
  selectedFlight: Flight;
  
  basket: object = {
    "3": true,
    "5": true
  }

  // private httpClient: HttpClient

  constructor(private flightService: FlightService) {
    // this.httpClient = httpClient;
  }

  ngOnInit() {
  }

  search(): void {

    this
      .flightService.find(this.from, this.to)
      .subscribe(
        flights => {
          this.flights = flights;
        },
        err => {
          console.error('Error loading flights', err);
        }
    )

  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }

}
