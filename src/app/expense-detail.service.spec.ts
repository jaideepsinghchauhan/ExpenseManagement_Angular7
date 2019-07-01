import { TestBed } from '@angular/core/testing';

import { ExpenseDetailService } from './expense-detail.service';

describe('ExpenseDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpenseDetailService = TestBed.get(ExpenseDetailService);
    expect(service).toBeTruthy();
  });
});
