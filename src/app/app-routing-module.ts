import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { CreateComponent } from './components/create-component/create-component';
import { DetailsComponent } from './components/details-component/details-component';
import { UpdatComponent } from './components/updat-component/updat-component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"create", component: CreateComponent},
  {path:"details/:id/:nombre/:localidad", component: DetailsComponent},
  {path:"update/:id", component: UpdatComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
