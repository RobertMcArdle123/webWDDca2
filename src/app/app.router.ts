import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {AppComponent} from'./app.component';
import {PartAComponent} from'./part-a/part-a.component';
import {PartBComponent} from'./part-b/part-b.component';
import {HomeComponent} from'./home/home.component';

export const router: Routes = [
   {path: '', redirectTo: 'home', pathMatch: 'full'},
   {path: 'part-a', component: PartAComponent },
   {path: 'part-b', component: PartBComponent },
   {path: 'home', component: HomeComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

