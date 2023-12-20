import { Component } from '@angular/core';
import { PredictionService } from './prediction.service';

@Component({
  selector: 'app-bankruptcy-prediction',
  templateUrl: './bankruptcy-prediction.component.html',
  styleUrls: ['./bankruptcy-prediction.component.css']
})
export class BankruptcyPredictionComponent {
  netValueGrowthRate: number | undefined;
  borrowingDependency: number | undefined;
  netIncomeToStockholdersEquity: number | undefined;
  persistentEpsLastFourSeasons: number | undefined;
  netProfitBeforeTaxPaidInCapital: number | undefined;
  perShareNetProfitBeforeTax: number | undefined;
  interestBearingDebtInterestRate: number | undefined;
  degreeOfFinancialLeverage: number | undefined;
  netValuePerShare: number | undefined;
  roaBeforeInterest: number | undefined;
  cashCurrentLiability: number | undefined;
  cashTotalAssets: number | undefined;
  continuousInterestRateAfterTax: number | undefined;
  debtRatioPercent: number | undefined;
  workingCapitalEquity: number | undefined;
  totalDebtTotalNetWorth: number | undefined;
  interestCoverageRatio: number | undefined;
  interestExpenseRatio: number | undefined;
  netIncomeToTotalAssets: number | undefined;
  bankruptcyPredictionResult: string | undefined;
  net_worth_assets: number | undefined;

  constructor(private predictionService: PredictionService) { }

  predictBankruptcy() {
    const featureInput = {
      net_value_growth_rate: this.netValueGrowthRate || 0,
      borrowing_dependency: this.borrowingDependency || 0,
      net_income_to_stockholders_equity: this.netIncomeToStockholdersEquity || 0,
      persistent_eps_last_four_seasons: this.persistentEpsLastFourSeasons || 0,
      net_profit_before_tax_paid_in_capital: this.netProfitBeforeTaxPaidInCapital || 0,
      per_share_net_profit_before_tax: this.perShareNetProfitBeforeTax || 0,
      interest_bearing_debt_interest_rate: this.interestBearingDebtInterestRate || 0,
      degree_of_financial_leverage: this.degreeOfFinancialLeverage || 0,
      net_value_per_share: this.netValuePerShare || 0,
      roa_before_interest: this.roaBeforeInterest || 0,
      cash_current_liability: this.cashCurrentLiability || 0,
      cash_total_assets: this.cashTotalAssets || 0,
      continuous_interest_rate_after_tax: this.continuousInterestRateAfterTax || 0,
      debt_ratio_percent: this.debtRatioPercent || 0,
      working_capital_equity: this.workingCapitalEquity || 0,
      total_debt_total_net_worth: this.totalDebtTotalNetWorth || 0,
      interest_coverage_ratio: this.interestCoverageRatio || 0,
      interest_expense_ratio: this.interestExpenseRatio || 0,
      net_income_to_total_assets: this.netIncomeToTotalAssets || 0,
      net_worth_assets: 10,
      roa_c_before_interest: 10
    };

    this.predictionService.predictBankruptcy(featureInput).subscribe(
      (result) => {
        this.bankruptcyPredictionResult = result.prediction;
      },
      (error) => {
        console.error('Error predicting bankruptcy:', error);
        this.bankruptcyPredictionResult = 'Error predicting bankruptcy.';
      }
    );
  }
}
