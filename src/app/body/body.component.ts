import { Component, OnInit, Input } from '@angular/core';
import { BeersService } from "../config/beers.service";
import { Beer } from "../config/beer";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() component: number; 

  loading = false;

  public beers: Beer[] = [];

  private page: number = 1;
  private name: string;
  private finished: boolean = false; 
  private search: boolean = false;

  private lsKey: string = 'FavBeers';
  private imgRoute: string = '../../../assets/img/';
  private imgStar: string = 'star.png';
  private imgFav: string = 'star-click.png';

  constructor(public beerService: BeersService) { }

  ngOnInit() {
    this.selectComponent();
  }

  onEnter(beerName: string) {
    this.name = beerName;
    this.clearElements();

    if (beerName.length > 1)
      this.search = true;

    this.selectComponent();
  }

  getPage() {
    this.loading = true;
    this.beerService.getPage(this.page)
      .subscribe((data) => {
        this.onSuccess(data);
        this.loading = false;
      });
  }

  getBeers() {
    this.loading = true;
    this.beerService.getBeers(this.name, this.page)
      .subscribe((data) => {
        this.onSuccess(data);
        this.loading = false;});
  }

  private getFavourites() {
    this.loading = true;
    let favs: string = localStorage.getItem(this.lsKey);
    this.beerService.getFavourites(favs, this.page)
      .subscribe((data) => {
        this.onSuccess(data);
        this.loading = false;});
  }

  onSuccess(data) {
    if (data != undefined && data.length > 0) {
      data.forEach(item => {
        this.changeStar(item);
        this.beers.push(item);
      });
    }
    else
      this.finished = true;
  }

  onScroll() {
    if (!this.finished) {
      this.page = this.page + 1;

      this.selectComponent();
    }
  }

  getLocalFav(): string[] {
    let favs: string = localStorage.getItem(this.lsKey);

    if (favs != null)
      return favs.split("|");
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

  onChangeFav(change: boolean) {
    if (change && this.component == 2) {
      this.clearElements();
      this.selectComponent();
    }
  }

 
  selectComponent() {
    switch (this.component) {
      case 1: {
        if (!this.search)
          this.getPage();
        else
          this.getBeers();
        break;
      }
      case 2: {
        this.getFavourites();
        break;
      }
      case 3: {
        //this.getFavourites();
        break;
      }
    }
  }

  clearElements() {
    this.beers = [];
    this.page = 1;
    this.finished = false;
    this.search = false;
  }

}

