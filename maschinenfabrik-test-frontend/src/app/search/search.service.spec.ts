import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { SearchComponent } from './search.component';
import { SearchService } from './search.service';
import { from } from 'rxjs';
import { ResultValue } from './interfaces/search.interface';


describe('SearchService', () => {
  let searchService: SearchService;
  let httpClient: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        SearchService
      ]
    });

    searchService = TestBed.get(SearchService);
    httpClient = TestBed.get(HttpClient);
  }));

  it('should send request to get data', () => {
    const getSpy = spyOn(httpClient, 'get').and.returnValue(from([{} as ResultValue]));
    
    searchService.getResultList('123');

    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(getSpy).toHaveBeenCalledWith('/api/search/123');
  });
});
