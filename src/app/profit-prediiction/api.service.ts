import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private apiUrl = 'http://127.0.0.1:8000/predict'; // Replace with your API URL

    constructor(private http: HttpClient) { }

    makePrediction(inputData: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, inputData);
    }
}
