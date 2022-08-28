import { Component, OnInit } from '@angular/core';
import { NgxMrzSdkService } from 'ngx-mrz-sdk';

@Component({
  selector: 'app-mrz-reader',
  templateUrl: './mrz-reader.component.html',
  styleUrls: ['./mrz-reader.component.css']
})
export class MrzReaderComponent implements OnInit {
  mrzResult: string = '';

  constructor(private mrzSdkService: NgxMrzSdkService) {
  }

  ngOnInit(): void {
  }

  // result = [originalValue, parsedValue]
  onResultReady(result: any): void {
    this.mrzResult = "";
    for (let i in result[1]) {
      this.mrzResult += i + ": " + result[1][i] + '\n';
    }
    // this.mrzResult = result[0];
  }
}
