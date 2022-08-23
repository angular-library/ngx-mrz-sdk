import { TestBed } from '@angular/core/testing';

import { NgxMrzSdkService } from './ngx-mrz-sdk.service';

describe('NgxMrzSdkService', () => {
  let service: NgxMrzSdkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMrzSdkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
