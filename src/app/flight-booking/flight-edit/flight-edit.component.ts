import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  id: string;
  showDetails: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { 
  }

  next(): void {
    const next = parseInt(this.id)+1
    this.router.navigate(['/flight-edit', next]);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.debug('params', params);
      this.id = params['id'];
      this.showDetails = params['showDetails'];
    });    
  }

}
