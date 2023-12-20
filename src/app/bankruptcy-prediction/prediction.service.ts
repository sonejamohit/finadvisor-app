import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PredictionService {
    private apiUrl = 'http://localhost:8000'; // Replace with your FastAPI server URL

    constructor(private http: HttpClient) { }

    predictBankruptcy(featureInput: any): Observable<any> {
        const url = `${this.apiUrl}/predict-bankruptcy`;
        return this.http.post(url, featureInput);
    }
}
