import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BeerDialogComponent } from '../beer-dialog/beer-dialog.component';
import { Beer } from '../config/beer';
import { BeersService } from '../config/beers.service';


@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.css']
})
export class BeerItemComponent implements OnInit {

  @Input() beer: Beer;
  @Output() changeFav = new EventEmitter<boolean>();
  private lsKey: string = 'FavBeers';
  private imgRoute: string = '../../assets/img/';
  private imgNo: string = 'star.png';
  private imgFav: string = 'star-click.png';
  private change: boolean = false;
  similarBeers: Array<any> = [];
 

  constructor(private modalService: NgbModal, private _http: BeersService) { }

  open() {
    const modalRef = this.modalService.open(BeerDialogComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.beer = this.beer;
  }

  clickFavorite(event: any, id: number) {
    event.stopPropagation();

    let favs: string = localStorage.getItem(this.lsKey);
    let idFav: string = String(id);

    if (favs != null) {
      var arrayFavs: string[] = favs.split("|");
      let indexFav: number = arrayFavs.indexOf(idFav);

      if (indexFav != -1) {
        arrayFavs.splice(indexFav, 1);
        this.beer.fav = this.imgRoute + this.imgNo;
        this.change = true;
      }
      else {
        arrayFavs.push(idFav);
        this.beer.fav = this.imgRoute + this.imgFav;
        this.change = false;
      }

      favs = arrayFavs.join("|");
      localStorage.setItem(this.lsKey, favs);
      this.changeFav.emit(this.change);
    } else {
      localStorage.setItem(this.lsKey, idFav);
      this.beer.fav = this.imgRoute + this.imgFav;
    }
  }
  
  ngOnInit() {

  }
  
}