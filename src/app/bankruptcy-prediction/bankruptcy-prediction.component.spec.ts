import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankruptcyPredictionComponent } from './bankruptcy-prediction.component';

describe('BankruptcyPredictionComponent', () => {
  let component: BankruptcyPredictionComponent;
  let fixture: ComponentFixture<BankruptcyPredictionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankruptcyPredictionComponent]
    });
    fixture = TestBed.createComponent(BankruptcyPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



