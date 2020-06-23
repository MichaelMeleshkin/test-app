import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultValue } from './interfaces/search.interface';


@Injectable()
export class SearchService {
    constructor(private http: HttpClient) { }

    getResultList(key: string): Observable<Array<ResultValue>> {
        return this.http.get<Array<ResultValue>>(`/api/search/${key}`);
    }
}