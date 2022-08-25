import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMrzParserComponent } from './ngx-mrz-parser.component';

describe('NgxMrzParserComponent', () => {
  let component: NgxMrzParserComponent;
  let fixture: ComponentFixture<NgxMrzParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMrzParserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMrzParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
