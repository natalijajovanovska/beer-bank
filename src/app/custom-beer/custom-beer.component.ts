import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-beer',
  templateUrl: './custom-beer.component.html',
  styleUrls: ['./custom-beer.component.css']
})
export class CustomBeerComponent implements OnInit {



  customBeer = [
   

  ];

  constructor() { }

  

  addCustomBeer(newBeerTitle){
    let newBeer = newBeerTitle;

    if(newBeer !== ""){
    this.customBeer.push(newBeer);
    } else{
      alert("Enter name for your custom beer")
    }
  }

  deleteCustomBeer(index){
    this.customBeer.splice(index, 1);
  }
  ngOnInit() {
    console.log(this.customBeer);
  }

}
