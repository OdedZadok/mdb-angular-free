import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Observable, Subject } from 'rxjs';
import { CountryEntity } from '../entities/country-entity';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit, AfterViewInit {

  @Input()
  public searchText = 'TTTT';
  results: any;
  countryList:  CountryEntity[] ;

  constructor(
    private countriesService: CountriesService) {
}

ngOnInit() {
}

searchEntries(term: string) {
  return this.countriesService.getCountries(term);
  // return of(this.getDataItems().filter((data: any) => data.toString().toLowerCase().includes(term.toString().toLowerCase())));
}

getFilteredData() {
  console.log(this.searchText);
  return this.countriesService.getCountries(this.searchText)
    .subscribe(res => {
      console.log(res.length);
      this.countryList = res;
    });



}

ngAfterViewInit() {
  // this.completer.selectedItemChanged().subscribe((data: any) => {
  //   this.searchText = data.text;
  //   this.getFilteredData();
  // });
}

}



