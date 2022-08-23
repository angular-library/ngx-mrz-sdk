import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMrzSdkComponent } from './ngx-mrz-sdk.component';

describe('NgxMrzSdkComponent', () => {
  let component: NgxMrzSdkComponent;
  let fixture: ComponentFixture<NgxMrzSdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMrzSdkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMrzSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
