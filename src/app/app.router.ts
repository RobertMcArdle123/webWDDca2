import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {AppComponent} from'./app.component';
import {PartAComponent} from'./part-a/part-a.component';
import {PartBComponent} from'./part-b/part-b.component';

export const router: Routes = [
   {path: '', redirectTo: 'part-a', pathMatch: 'full'},
   {path: 'part-a', component: PartAComponent },
   {path: 'part-b', component: PartBComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

