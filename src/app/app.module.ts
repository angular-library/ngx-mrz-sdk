import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MrzReaderComponent } from './mrz-reader/mrz-reader.component';
import { MrzScannerComponent } from './mrz-scanner/mrz-scanner.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgxMrzSdkModule } from 'ngx-mrz-sdk';

@NgModule({
  declarations: [
    AppComponent,
    MrzReaderComponent,
    MrzScannerComponent,
    ProductListComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMrzSdkModule.forRoot({ 
      licenseKey: "DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ==", 
      dceResourcePath: "assets/dynamsoft-camera-enhancer", 
      dlrResourcePath: "assets/dynamsoft-label-recognizer"}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
