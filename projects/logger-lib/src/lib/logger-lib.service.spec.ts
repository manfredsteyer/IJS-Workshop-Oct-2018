import { TestBed, inject } from '@angular/core/testing';

import { LoggerLibService } from './logger-lib.service';

describe('LoggerLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerLibService]
    });
  });

  it('should be created', inject([LoggerLibService], (service: LoggerLibService) => {
    expect(service).toBeTruthy();
  }));
});
