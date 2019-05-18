import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoCompleteComponent } from '../common-feature/auto-complete/auto-complete.component';
import { MainComponent } from '../common-feature/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'auto', component: AutoCompleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
