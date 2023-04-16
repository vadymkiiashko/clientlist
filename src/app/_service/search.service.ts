import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  search(searchObject: {
    country?: string;
    city?: string;
    turnover?: string;
  }): { country?: string; city?: string; turnover?: string } {
    const path = '/api/endpoint';
    let queryParam = '';

    if (searchObject.country) {
      queryParam = `?country=${searchObject.country}`;
    } else if (searchObject.city) {
      queryParam = `?city=${searchObject.city}`;
    } else if (searchObject.turnover) {
      queryParam = `?turnover=${searchObject.turnover}`;
    }

    console.log(path + queryParam);

    return searchObject;
  }
}
