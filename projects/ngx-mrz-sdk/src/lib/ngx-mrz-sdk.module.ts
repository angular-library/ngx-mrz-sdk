import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxMrzReaderComponent } from './ngx-mrz-reader/ngx-mrz-reader.component';
import { NgxMrzScannerComponent } from './ngx-mrz-scanner/ngx-mrz-scanner.component';
import { MrzSdkServiceConfig } from './ngx-mrz-sdk.service';

@NgModule({
  declarations: [
    NgxMrzReaderComponent,
    NgxMrzScannerComponent
  ],
  imports: [
  ],
  exports: [
    NgxMrzReaderComponent,
    NgxMrzScannerComponent
  ]
})
export class NgxMrzSdkModule { 
  constructor(@Optional() @SkipSelf() parentModule?: NgxMrzSdkModule) {
    if (parentModule) {
      throw new Error(
        'GreetingModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: MrzSdkServiceConfig): ModuleWithProviders<NgxMrzSdkModule> {
    return {
      ngModule: NgxMrzSdkModule,
      providers: [
        { provide: MrzSdkServiceConfig, useValue: config }
      ]
    };
  }
}
