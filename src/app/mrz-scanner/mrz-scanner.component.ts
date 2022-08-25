import { Component, OnInit } from '@angular/core';
import { NgxMrzSdkService } from 'ngx-mrz-sdk';

@Component({
  selector: 'app-mrz-scanner',
  templateUrl: './mrz-scanner.component.html',
})
export class MrzScannerComponent implements OnInit {
  mrzResult: string = '';
  constructor(private mrzSdkService: NgxMrzSdkService) {
  }

  ngOnInit(): void {
  }

  onResultReady(result: string): void {
    this.mrzResult = result;
  }
}
