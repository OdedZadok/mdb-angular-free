import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeWhile, tap, first, debounceTime  } from 'rxjs/operators';
import { CountryEntity } from '../entities/country-entity';
import { CountriesEntity } from '../entities/countries-entity';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }
  private SERVER_URL = 'http://localhost:8080/api/';
  // private countries: Observable<Array<CountryEntity>>;

  public test() {
    let testFn = (a: number) => {

    }
  }

  public getCountries(search: string): Observable<Array<CountryEntity>> {
      //  const filterCountries = new Observable<CountryEntity>(sub => {
       return this.http.get<CountriesEntity>(this.SERVER_URL + 'countries')
                .pipe(
                  debounceTime(1250),
                  map (t => t.list.filter(c => c.name.indexOf(search) > 0)));
                // .subscribe( t  => {
                //   console.log(t);
                //   t.list.forEach(c => {
                //     if (c.name.indexOf(search)>0) {
                //       filterCountries.next(c);
                //     }
                //   });
                //   // filterCountries.next(t.list.filter(c => c.name.indexof(search) > 0 ));
                // });
                            // .slice(0, 10)
      //                       .filter(c => c.name.toString().indexof(search) > 0)
      //                       .map(c => new CountryEntity(c.name, c.code) ) ));
      // // sub.next()
    // });

    // return filterCountries;
    // return this.http.get<any>(this.SERVER_URL + 'countries')
    //   // .pipe(takeWhile((res, num) => num > 4))
    //   .pipe(map(res => res.countries.map(c => new CountryEntity(c.name, c.code) ) ));

      // .subscribe(arg => this.property = arg);



}}
