import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AutoCompleteComponent,
    MainComponent
  ],
imports: [
    CommonModule
  ],
  exports: [AutoCompleteComponent, MainComponent]
})
export class CommonFeatureModule { }
