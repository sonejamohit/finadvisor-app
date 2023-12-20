import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-profit-prediiction',
  templateUrl: './profit-prediiction.component.html',
  styleUrls: ['./profit-prediiction.component.css']
})


export class ProfitPrediictionComponent {
  rAndDSpend: number | undefined;
  marketingSpend: number | undefined;
  prediction: number | undefined;

  constructor(private apiService: ApiService) { }

  makePrediction() {
    const inputData = {
      r_and_d_spend: this.rAndDSpend,
      marketing_spend: this.marketingSpend,
    };


    this.apiService.makePrediction(inputData).subscribe(
      (response) => {
        this.prediction = response.prediction;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
