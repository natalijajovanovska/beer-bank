import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { ErrorPageComponent } from './error-page/error-page.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favourite', component: FavouriteComponent },
  { path: 'advanced-search', component: AdvancedSearchComponent },
  { path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
