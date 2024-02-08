import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EletronicComponent } from './eletronic/eletronic.component';
import { HomeComponent } from './home/home.component';
import { PopComponent } from './pop/pop.component';

const routes: Routes = [
{ path: '#', redirectTo: '/home', pathMatch: 'full'},
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: 'home', component: HomeComponent },
{ path: 'pop', component: PopComponent},
{ path: 'eletronic', component: EletronicComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
