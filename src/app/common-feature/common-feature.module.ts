import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { CommonModule } from '@angular/common';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AutoCompleteComponent,
    MainComponent
  ],
imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  exports: [AutoCompleteComponent, MainComponent]
})
export class CommonFeatureModule { }
