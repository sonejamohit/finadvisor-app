import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitPrediictionComponent } from './profit-prediiction.component';

describe('ProfitPrediictionComponent', () => {
  let component: ProfitPrediictionComponent;
  let fixture: ComponentFixture<ProfitPrediictionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfitPrediictionComponent]
    });
    fixture = TestBed.createComponent(ProfitPrediictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

