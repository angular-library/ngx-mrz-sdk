import { Component, OnInit } from '@angular/core';
import { NgxMrzSdkService } from 'ngx-mrz-sdk';

@Component({
  selector: 'app-mrz-reader',
  templateUrl: './mrz-reader.component.html',
})
export class MrzReaderComponent implements OnInit {
  mrzResult: string = '';

  constructor(private mrzSdkService: NgxMrzSdkService) {
  }

  ngOnInit(): void {
  }

  onResultReady(result: string): void {
    this.mrzResult = result;
  }
}
