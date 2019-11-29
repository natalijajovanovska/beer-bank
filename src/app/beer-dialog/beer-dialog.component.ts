import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BeersService } from '../config/beers.service';


import { Beer } from '../config/beer';

@Component({
  selector: 'app-beer-dialog',
  templateUrl: './beer-dialog.component.html',
  styleUrls: ['./beer-dialog.component.css']
})
export class BeerDialogComponent implements OnInit {

  @Input() beer: Beer;
  allBeers: Array<any>;

  constructor(public activeModal: NgbActiveModal, private _http: BeersService) { }

  ngOnInit() {
    this.allBeers = [];
    this._http.getAll().subscribe(data => {
      while (this.allBeers.length < 3) {
        let item = data[Math.floor(Math.random() * 25)];
        if (!this.allBeers.includes(item)) {
          this.allBeers.push(item);
        }
    }})
  }

}
