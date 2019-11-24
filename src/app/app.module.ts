import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BeersService } from "./config/beers.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BodyComponent } from './body/body.component';
import { BeerItemComponent } from './beer-item/beer-item.component';
import { BeerDialogComponent } from './beer-dialog/beer-dialog.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CustomBeerComponent } from './custom-beer/custom-beer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FavouriteComponent,
    AdvancedSearchComponent,
    BodyComponent,
    BeerItemComponent,
    BeerDialogComponent,
    ErrorPageComponent,
    CustomBeerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    InfiniteScrollModule
  ],
  providers: [
    NgbActiveModal,
    BeersService
  ],
  entryComponents: [
    BeerDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
