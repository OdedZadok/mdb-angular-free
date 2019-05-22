import { InMemoryDbService } from 'angular-in-memory-web-api';

import CountriesJson from '../../../assets/countries.json';
// src\assets\metadata.json

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const countries = CountriesJson;

    return { countries };
  }
}
