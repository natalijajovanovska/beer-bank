import { Component, OnInit } from '@angular/core';
import { BeersService } from '../config/beers.service';
import { Beer } from "../config/beer";


@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {


  public beers: Beer[] = [];
  public searchedMaxIbu: number;
  public searchedMinIbu: number;
  public searchedMaxAbv: number;
  public searchedMinAbv: number;
  public searchedMaxEbc: number;
  public searchedMinEbc: number;
  public searchedBrewedBefore: number;
  public searchedBrewedAfter: number;
  private lsKey: string = 'FavBeers';
  private imgRoute: string = '../../../assets/img/';
  private imgStar: string = 'star.png';
  private imgFav: string = 'star-click.png';


  constructor(public beerService: BeersService) { }

  getMaxIbu(event: KeyboardEvent) {
    if (event.type === 'keyup') {
      if (this.searchedMaxIbu) {
        this.beerService.getBeersByMaxIbu(this.searchedMaxIbu)
          .subscribe((data) => {
            this.beers = data;
            this.beers.forEach(item => {
              this.changeStar(item)})
          })
      }}
  
  }


  getMinIbu(event: KeyboardEvent) {
    if (event.type === 'keyup') {
      if (this.searchedMinIbu) {
        this.beerService.getBeersByMinIbu(this.searchedMinIbu)
          .subscribe((data) => {
            this.beers = data;
            this.beers.forEach(item => {
              this.changeStar(item)})
          })
      }}
  }

  getMaxAbv(event: KeyboardEvent) {
    if (event.type === 'keyup') {
      if (this.searchedMaxAbv) {
        this.beerService.getBeersByMaxAbv(this.searchedMaxAbv)
          .subscribe((data) => {
            this.beers = data;
            this.beers.forEach(item => {
              this.changeStar(item)})
          })
      }}
  
  }

  getMinAbv(event: KeyboardEvent) {
    if (event.type === 'keyup') {
      if (this.searchedMinAbv) {
        this.beerService.getBeersByMinAbv(this.searchedMinAbv)
          .subscribe((data) => {
            this.beers = data;
            this.beers.forEach(item => {
              this.changeStar(item)})
          })
      }}
  
  }

  getMaxEbc(event: KeyboardEvent) {
    if (event.type === 'keyup') {
      if (this.searchedMaxEbc) {
        this.beerService.getBeersByMaxEbc(this.searchedMaxEbc)
          .subscribe((data) => {
            this.beers = data;
            this.beers.forEach(item => {
              this.changeStar(item)})
          })
      }}
  
  }

  getMinEbc(event: KeyboardEvent) {
    if (event.type === 'keyup') {
      if (this.searchedMinEbc) {
        this.beerService.getBeersByMinEbc(this.searchedMinEbc)
          .subscribe((data) => {
            this.beers = data;
            this.beers.forEach(item => {
              this.changeStar(item)})
          })
      }}
  
  }


  getBrewedBefore(event: KeyboardEvent) {
    if (event.type === 'keyup') {
      if (this.searchedBrewedBefore) {
        this.beerService.getBeersByBrewedBefore(this.searchedBrewedBefore, 2007)
          .subscribe((data) => {
            this.beers = data;
            this.beers.forEach(item => {
              this.changeStar(item)})
          })
      }}
  
  }

  getBrewedAfter(event: KeyboardEvent) {
    if (event.type === 'keyup') {
      if (this.searchedBrewedAfter) {
        this.beerService.getBeersByBrewedAfter(this.searchedBrewedAfter, 2007)
          .subscribe((data) => {
            this.beers = data;
            this.beers.forEach(item => {
              this.changeStar(item)})
          })
      }}
  
  }



  changeStar(item) {
    let favs: string = localStorage.getItem(this.lsKey);
    if (favs != null) {
      let sFav: string[] = favs.split("|");
      if (favs.indexOf(String(item.id)) != -1)
        item.fav = this.imgRoute + this.imgFav;
      else
        item.fav = this.imgRoute + this.imgStar;
    }
  }


  clearNumbers(){
    this.searchedMinEbc = null; 
    this.searchedMaxIbu = null;
    this.searchedMinIbu = null;
    this.searchedMaxAbv = null;
    this.searchedMinAbv = null; 
    this.searchedMaxEbc = null; 
    this.searchedMinEbc = null; 
    this.searchedBrewedBefore = null;
    this.searchedBrewedAfter = null;
  }

  ngOnInit() {
  }

}
